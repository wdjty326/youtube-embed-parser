export enum YouTubeErrorCode {
    NONE = 0, // 에러 없음

    LIMIT_AGE_18 = 1, // 연령제한

    NOT_SHARE = 2, // 퍼가기 금지

    NOT_COPYRIGHT = 3, // 저작권 침해

    PRIVATE_VIDEO = 4, // 비공개 영상

    REMOVE_VIDEO = 5, // 삭제한 영상

    MEMBERSHIP_VIDEO = 6, // 멤버쉽 영상

    UNPLAYABLE = 99, // 재생이 불가능한 영상
}
