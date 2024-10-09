import type {
    APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayEventRequestContext
} from "aws-lambda";
import { checkEmbeddedErrorScreen, getChannelID, getEmbeddPlayerResponse, getThumbnail, getTitle, getVideoDurationSeconds } from "./youtubeUtils";
import { YouTubeErrorCode } from "./errorCode";

export const handler = async (event: APIGatewayProxyEvent, _?: APIGatewayEventRequestContext): Promise<APIGatewayProxyResult> => {
    const queryStringParameters = event.queryStringParameters;
    if (!queryStringParameters) {
        return {
            statusCode: 404,
            body: JSON.stringify({ msg: 'not found vid' })
        }
    }
    try {
        const vid = queryStringParameters['v'] || 'NO_VID';
        const embedPlayerResponse = await getEmbeddPlayerResponse(vid);

        const code = checkEmbeddedErrorScreen(embedPlayerResponse);
        if (code !== YouTubeErrorCode.NONE) {
            return {
                statusCode: 403,
                body: JSON.stringify({
                    vid,
                    code,
                }),
            }
        }

        const title = getTitle(embedPlayerResponse);
        const duration = getVideoDurationSeconds(embedPlayerResponse);
        const channelId = getChannelID(embedPlayerResponse);
        const thumbnail = getThumbnail(embedPlayerResponse);

        return {
            statusCode: 200,
            body: JSON.stringify({
                vid,
                code,

                title,
                duration,
                channelId,
                thumbnail,
            }),
        };
    } catch (e) {
        console.error("embedPlayerResponse", e);
    }

    return {
        statusCode: 500,
        body: JSON.stringify({ msg: 'failed parser' })
    };
};