import test, { it } from "node:test";
import { handler } from "../src";
import { APIGatewayProxyEvent } from "aws-lambda";
import assert from "assert";

const getJson = (v: string) => {
    return {
        queryStringParameters: {
            v
        }
    } as unknown as APIGatewayProxyEvent;
}

test("정상 요청을 확인합니다.", async () => {
    const data = await handler(getJson("oqFzjIoqA5M"));
    assert.strictEqual(JSON.parse(data.body)['previewPlayabilityStatus']['status'], 'OK');
});