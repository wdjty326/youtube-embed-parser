import type {
    APIGatewayProxyEvent, APIGatewayProxyResult, APIGatewayEventRequestContext
} from "aws-lambda";
import { getPlayerVarsEmbed } from "./youtubeUtils";

export const handler = async (event: APIGatewayProxyEvent, context: APIGatewayEventRequestContext): Promise<APIGatewayProxyResult> => {
    const playerVars = await getPlayerVarsEmbed("s2ZWciC68tQ");

    return {
        statusCode: 200,
        body: JSON.stringify(playerVars),
    };
};