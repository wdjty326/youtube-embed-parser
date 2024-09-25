import https from "https";

// `youtube embed` 에 대한 페이지를 가져옵니다.
export const getYTConfigEmbed = (vid: string): Promise<YouTubeConfigure> => new Promise((resolve, reject) => {
    const uri = new URL(`https://www.youtube.com/embed/${vid}`);
    https.get(uri, {
        headers: {
            "accept-language": "ko-KR",
            "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 YaApp_Android/22.50.1 YaSearchBrowser/22.50.1 BroPP/1.0 SA/3 Safari/537.36"
        },
    }, (res) => {
        console.log('statusCode:', res.statusCode);
        console.log('headers:', res.headers);

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

export const getPlayerVarsEmbed = async (vid: string): Promise<EmbeddedPlayerResponse> => {
    const ytcfg: any = await getYTConfigEmbed(vid);

    if (!("PLAYER_VARS" in ytcfg) || !("embedded_player_response" in ytcfg["PLAYER_VARS"])) throw Error("not found player");

    try {
        const res = JSON.parse(ytcfg["PLAYER_VARS"]["embedded_player_response"]);
        return res;
    } catch (e) {
        throw Error('failed parser');
    }
};