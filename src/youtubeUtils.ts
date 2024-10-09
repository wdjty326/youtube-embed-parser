import https from "https";
import { YouTubeErrorCode } from "./errorCode";

/**
 * 영상 재생이 불가능한 영상인지 확인합니다.
 * @param data 
 * @returns 
 */
export const checkEmbeddedErrorScreen = (data: EmbeddedPlayerResponse) => {
    if (!data.previewPlayabilityStatus.errorScreen || !("playerErrorMessageRenderer" in data.previewPlayabilityStatus.errorScreen)) return YouTubeErrorCode.NONE;

    const playerErrorMessageRenderer = data.previewPlayabilityStatus.errorScreen.playerErrorMessageRenderer;
    if (playerErrorMessageRenderer.reason.runs[0].text.includes('연령 제한')) return YouTubeErrorCode.LIMIT_AGE_18;
    if (playerErrorMessageRenderer.subreason.runs[0].text.includes('동영상 소유자')) return YouTubeErrorCode.NOT_SHARE;
    if (playerErrorMessageRenderer.subreason.runs[0].text.includes('저작권 침해 신고')) return YouTubeErrorCode.NOT_COPYRIGHT;
    if (playerErrorMessageRenderer.subreason.runs[0].text.includes('비공개 영상')) return YouTubeErrorCode.PRIVATE_VIDEO;
    if (playerErrorMessageRenderer.subreason.runs[0].text.includes('삭제한 동영상')) return YouTubeErrorCode.REMOVE_VIDEO;

    // TODO::맴버쉽 영상 필터 필요

    if (data.previewPlayabilityStatus.status === "UNPLAYABLE") return YouTubeErrorCode.UNPLAYABLE;

    return YouTubeErrorCode.NONE;
};

/**
 * 영상 제목을 가져옵니다.
 * @param data 
 * @returns 
 */
export const getTitle = (data: EmbeddedPlayerResponse) => {
    return data.embedPreview?.thumbnailPreviewRenderer?.title.runs[0].text || '';
};

/**
 * 영상 시간을 가져옵니다.
 * @param data 
 * @returns 
 */
export const getVideoDurationSeconds = (data: EmbeddedPlayerResponse) => {
    return parseInt(data.embedPreview?.thumbnailPreviewRenderer?.videoDurationSeconds || '-1', 10);
};

/**
 * 채널주소를 가져옵니다.
 * @param data 
 * @returns 
 */
export const getChannelID = (data: EmbeddedPlayerResponse) => {
    return data.embedPreview.thumbnailPreviewRenderer.videoDetails?.embeddedPlayerOverlayVideoDetailsRenderer?.expandedRenderer?.embeddedPlayerOverlayVideoDetailsExpandedRenderer?.subscribeButton?.subscribeButtonRenderer?.channelId || '';
};

/**
 * 썸네일 정보를 가져옵니다.
 * @param data 
 */
export const getThumbnail = (data: EmbeddedPlayerResponse) => {
    if (data.previewPlayabilityStatus?.status === 'UNPLAYABLE') return '';
    
    const thumbnails = data.embedPreview.thumbnailPreviewRenderer.defaultThumbnail.thumbnails;
    if (thumbnails.length === 0) return '';
    return thumbnails[thumbnails.length - 1].url; // 가장 마지막 섬네일 가져오기
};


// `youtube embed` 에 대한 페이지를 가져옵니다.
export const getYTConfigEmbed = (vid: string): Promise<YouTubeConfigure> => new Promise((resolve, reject) => {
    const uri = new URL(`https://www.youtube.com/embed/${vid}`);
    https.get(uri, {
        headers: {
            "accept-language": "ko-KR",
            "cache-control": "no-cache",
            "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 YaApp_Android/22.50.1 YaSearchBrowser/22.50.1 BroPP/1.0 SA/3 Safari/537.36",
            "referer": `https://www.youtube.com/watch?v=${vid}`,

            "sec-fetch-dest": "iframe",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin"
        },
    }, (res) => {
        // tc 로직실행시 오류 방지
        if (process.env.NODE_ENV === "production") {
            console.log('statusCode:', res.statusCode);
            console.log('headers:', res.headers);
        }

        const chunks: any[] = [];
        res.setEncoding("utf8");
        res.on("data", (chunk) => {
            chunks.push(chunk);
        });
        res.on("end", () => {
            const result = /ytcfg\.set\((\{.+\})\);/.exec(chunks.join("")) || [];
            if (typeof result[1] !== "string") return reject(Error('not found ytcfg'));
            try {
                const json = JSON.parse(result[1]);
                resolve(json);
            } catch (e) {
                reject(Error('failed parser'));
            }
        });
        res.on("error", (err) => reject(err));
    }).on("error", (err) => reject(err));
});

export const getEmbeddPlayerResponse = async (vid: string): Promise<EmbeddedPlayerResponse> => {
    const ytcfg: any = await getYTConfigEmbed(vid);

    if (!("PLAYER_VARS" in ytcfg) || !("embedded_player_response" in ytcfg["PLAYER_VARS"])) throw Error("not found player");

    try {
        const res = JSON.parse(ytcfg["PLAYER_VARS"]["embedded_player_response"]);
        return res;
    } catch (e) {
        throw Error('failed parser');
    }
};