import assert from "assert";
import { getPlayerVarsEmbed, getYTConfigEmbed } from "../src/youtubeUtils";

describe('youtubeUtil.ts 함수 확인', () => {
    it('파싱이 정상적인지 확인합니다.', async () => {
        const resp = await getYTConfigEmbed('C3GouGa0noM');
        assert.strictEqual(typeof resp, 'object');
    });

    it('영상 정보가 정상적인지 확인합니다.', async () => {
        const resp = await getPlayerVarsEmbed('oqFzjIoqA5M');
        assert.strictEqual(resp['previewPlayabilityStatus']['status'], 'OK');
    });
    
    it('iframe에서만 재생 가능한 영상을 정상적으로 가져오는지 확인합니다.', async () => {
        const resp = await getPlayerVarsEmbed('5FrhtahQiRc');
        assert.strictEqual(resp['previewPlayabilityStatus']['status'], 'OK');
    });
});
