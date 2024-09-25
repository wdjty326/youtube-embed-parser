import type {
    APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayEventRequestContext
} from "aws-lambda";
import { getPlayerVarsEmbed } from "./youtubeUtils";

export const handler = async (event: APIGatewayProxyEvent, _?: APIGatewayEventRequestContext): Promise<APIGatewayProxyResult> => {
    const queryStringParameters = event.queryStringParameters;
    if (!queryStringParameters) {
        return {
            statusCode: 404,
            body: JSON.stringify({ msg: '' })
        }
    }
    const playerVars = await getPlayerVarsEmbed(queryStringParameters['v'] || '');

    return {
        statusCode: 200,
        body: JSON.stringify(playerVars),
    };
};