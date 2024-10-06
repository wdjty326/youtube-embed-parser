import type {
    APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayEventRequestContext
} from "aws-lambda";
import { getChannelID, getPlayerVarsEmbed, getThumbnail, getTitle, getVideoDurationSeconds } from "./youtubeUtils";

export const handler = async (event: APIGatewayProxyEvent, _?: APIGatewayEventRequestContext): Promise<APIGatewayProxyResult> => {
    const queryStringParameters = event.queryStringParameters;
    if (!queryStringParameters) {
        return {
            statusCode: 404,
            body: JSON.stringify({ msg: 'not found vid' })
        }
    }
    try {
        const playerVars = await getPlayerVarsEmbed(queryStringParameters['v'] || '');

        const title = getTitle(playerVars);
        const duration = getVideoDurationSeconds(playerVars);
        const channelId = getChannelID(playerVars);
        const thumbnail = getThumbnail(playerVars);

        return {
            statusCode: 200,
            body: JSON.stringify({
                title,
                duration,
                channelId,
                thumbnail,
            }),
        };
    } catch (e) {
        console.error("playerVars", e);
    }

    return {
        statusCode: 500,
        body: JSON.stringify({ msg: 'failed parser' })
    };
};