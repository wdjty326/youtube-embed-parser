import assert from "assert";
import { handler } from "../src/index";

import type { APIGatewayProxyEvent } from "aws-lambda";
import { YouTubeErrorCode } from "../src/errorCode";

const getJson = (vid) => ({
    queryStringParameters: {
        v: vid,
    },
}) as unknown as APIGatewayProxyEvent;

describe('유튜브 함수 확인', () => {
    it('영상을 정상적으로 가져오는지 확인합니다.', async () => {
        const resp = await handler(getJson('C3GouGa0noM'));
        assert.strictEqual(resp.statusCode, 200);
    });

    it('iframe에서만 재생 가능한 영상을 가져옵니다.', async () => {
        const resp = await handler(getJson('5FrhtahQiRc'));
        assert.strictEqual(resp.statusCode, 200);
    });

    it('연령 제한이 적용된 영상입니다.', async () => {
        const resp = await handler(getJson('18cS7WzhX5g'));
        assert.strictEqual(resp.statusCode, 403);

        const body = JSON.parse(resp.body);
        assert.strictEqual(body.code, YouTubeErrorCode.LIMIT_AGE_18);
    });

    it('퍼가기금지가 적용된 영상입니다.', async () => {
        const resp = await handler(getJson('eHT-IZTzT48'));
        assert.strictEqual(resp.statusCode, 403);

        const body = JSON.parse(resp.body);
        assert.strictEqual(body.code, YouTubeErrorCode.NOT_SHARE);
    });

    it('저작권 침해 신고가 적용된 영상입니다.', async () => {
        const resp = await handler(getJson('YfmrdaseuQA'));
        assert.strictEqual(resp.statusCode, 403);

        const body = JSON.parse(resp.body);
        assert.strictEqual(body.code, YouTubeErrorCode.NOT_COPYRIGHT);
    });

    it('비공개처리가 적용된 영상입니다.', async () => {
        const resp = await handler(getJson('kF-4_7wiaKA'));
        assert.strictEqual(resp.statusCode, 403);

        const body = JSON.parse(resp.body);
        assert.strictEqual(body.code, YouTubeErrorCode.PRIVATE_VIDEO);
    });

    it('삭제된 영상입니다.', async () => {
        const resp = await handler(getJson('kfNbgJ01Tw0'));
        assert.strictEqual(resp.statusCode, 403);

        const body = JSON.parse(resp.body);
        assert.strictEqual(body.code, YouTubeErrorCode.REMOVE_VIDEO);
    });

    it('멤버쉽 영상입니다.', async () => {
        const resp = await handler(getJson('pS5otFveIzc'));
        assert.strictEqual(resp.statusCode, 403);

        const body = JSON.parse(resp.body);
        assert.strictEqual(body.code, YouTubeErrorCode.MEMBERSHIP_VIDEO);
    });
});
