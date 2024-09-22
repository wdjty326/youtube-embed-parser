declare interface YouTubeConfigure {
    PLAYER_VARS: PlayerVars;
}

declare interface PlayerVars {
    embedded_player_response: EmbeddedPlayerResponse;
    video_id: string;
}

declare interface EmbeddedPlayerResponse {
    responseContext: {
        serviceTrackingParams: ServiceTrackingParams[];
    };
    embedPreview: {
        thumbnailPreviewRenderer: unknown;
    };
    trackingParams: string;
    permissions: {
        allowAdEvents: boolean;
        allowImaMonetization: boolean;
        allowPfpUnbranded: boolean;
    },
    attestation: {
        playerAttestationRenderer: PlayerAttestationRenderer;
    };
    videoFlags: {
        playableInEmbed: boolean;
        isCrawlable: boolean;
    };
    previewPlayabilityStatus: {
        status: "OK" | "UNPLAYABLE";
        playableInEmbed: boolean;
        contextParams: string;
        errorScreen?: PlayerErrorMessageRenderer;
    };
    embeddedPlayerMode: string;
    embeddedPlayerConfig: {
        embeddedPlayerMode: string;
        embeddedPlayerFlags: {};
    };
}

interface ServiceTrackingParams {
    services: string;
    params: Array<{
        key: string;
        value: string;
    }>;
}

interface PlayerAttestationRenderer {
    challenge: string;
    botguardData: {
        program: string;
        interpreterSafeUrl: {
            privateDoNotAccessOrElseTrustedResourceUrlWrappedValue: string;
        };
        serverEnvironment: number;
    };
}

interface PlayerErrorMessageRenderer {
    subreason: {
        runs: Array<{
            text: string; // "동영상 소유 자가 다른 웹사이트에서 재생할 수 없도록 설정했습니다."
        }>;
    };
    reason: {
        runs: Array<{
            text: string; // "동영상을 재생할 수 없음"
        }>;
    };
    proceedButton: {
        buttonRenderer: {
            style: string;
            size: string;
            isDisabled: boolean;
            text: {
                simpleText: string; // "YouTube에서 보기"
            };
            navigationEndpoint: {
                clickTrackingParams: string;
                urlEndpoint: {
                    url: string;
                    target: string;
                };
            };
            trackingParams: string;
        };
    };
    thumbnail: {
        thumbnails: Array<{
            url: string;
            width: number;
            height: number;
        }>;
    };
    icon: {
        iconType: string;
    };
}

interface ThumbnailPreviewRenderer {
    title: {
        runs: Array<{
            text: string; // "너 나랑 평생가는거야"
        }>;
    };
    defaultThumbnail: {
        thumbnails: Array<{
            url: string;
            width: number;
            height: number;
        }>;
    };
    playButton: {
        buttonRenderer: {
            style: string;
            size: string;
            isDisabled: boolean;
            navigationEndpoint: {
                clickTrackingParams: string;
                watchEndpoint: {
                    videoId: string;
                };
            };
            accessibility: {
                label: string; "너 나랑 평생가는거야 재생"
            };
            trackingParams: string;
        }
    };
    "videoDetails": {
        "embeddedPlayerOverlayVideoDetailsRenderer": {
            "channelThumbnail": {
                "thumbnails": [{
                    "url": "https://yt3.ggpht.com/ytc/AIdro_kDRQFEoDAOjXmPhoKT6hUs_skYotYGjrBegtQReW_2Go4=s68-c-k-c0x00ffffff-no-rj",
                    "width": 68,
                    "height": 68
                }]
            },
            "collapsedRenderer": {
                "embeddedPlayerOverlayVideoDetailsCollapsedRenderer": {
                    "title": {
                        "runs": [{
                            "text": "너 나랑 평생가는거야",
                            "navigationEndpoint": {
                                "clickTrackingParams": "CAYQ46ICIhMIlLH-qoLUiAMVyVn1BR1_ggN1",
                                "urlEndpoint": {
                                    "url": "http://www.youtube.com/watch?v=s2ZWciC68tQ"
                                }
                            }
                        }]
                    },
                    "subtitle": {
                        "runs": [{
                            "text": "조회수 47만회 • 댓글 500개"
                        }]
                    },
                    "trackingParams": "CAYQ46ICIhMIlLH-qoLUiAMVyVn1BR1_ggN1"
                }
            },
            "expandedRenderer": {
                "embeddedPlayerOverlayVideoDetailsExpandedRenderer": {
                    "title": {
                        "runs": [{
                            "text": "랄로"
                        }]
                    },
                    "subscribeButton": {
                        "subscribeButtonRenderer": {
                            "buttonText": {
                                "runs": [{
                                    "text": "구독"
                                }]
                            },
                            "subscribed": false,
                            "enabled": true,
                            "type": "FREE",
                            "channelId": "UCD2YO_A_PVMgMDN9jpRrpVA",
                            "showPreferences": false,
                            "subscribedButtonText": {
                                "runs": [{
                                    "text": "구독중"
                                }]
                            },
                            "unsubscribedButtonText": {
                                "runs": [{
                                    "text": "구독"
                                }]
                            },
                            "trackingParams": "CAQQmysiEwiUsf6qgtSIAxXJWfUFHX-CA3UyCWl2LWVtYmVkcw==",
                            "unsubscribeButtonText": {
                                "runs": [{
                                    "text": "구독 취소"
                                }]
                            },
                            "serviceEndpoints": [{
                                "clickTrackingParams": "CAQQmysiEwiUsf6qgtSIAxXJWfUFHX-CA3UyCWl2LWVtYmVkcw==",
                                "subscribeEndpoint": {
                                    "channelIds": ["UCD2YO_A_PVMgMDN9jpRrpVA"],
                                    "params": "EgIIBxgA"
                                }
                            }, {
                                "clickTrackingParams": "CAQQmysiEwiUsf6qgtSIAxXJWfUFHX-CA3UyCWl2LWVtYmVkcw==",
                                "unsubscribeEndpoint": {
                                    "channelIds": ["UCD2YO_A_PVMgMDN9jpRrpVA"],
                                    "params": "CgIIBxgA"
                                }
                            }],
                            "notificationPreferenceToggleButton": {
                                "toggleButtonRenderer": {
                                    "isToggled": false,
                                    "isDisabled": false,
                                    "defaultIcon": {
                                        "iconType": "CHANNEL_NOTIFICATION_PREFERENCE_OFF"
                                    },
                                    "defaultServiceEndpoint": {
                                        "clickTrackingParams": "CAUQmE0iEwiUsf6qgtSIAxXJWfUFHX-CA3UyHFBSRUZFUkVOQ0VfQUxMX05PVElGSUNBVElPTlM=",
                                        "modifyChannelNotificationPreferenceEndpoint": {
                                            "params": "ChhVQ0QyWU9fQV9QVk1nTUROOWpwUnJwVkESAggCGAE%3D"
                                        }
                                    },
                                    "toggledIcon": {
                                        "iconType": "CHANNEL_NOTIFICATION_PREFERENCE_ON"
                                    },
                                    "toggledServiceEndpoint": {
                                        "clickTrackingParams": "CAUQmE0iEwiUsf6qgtSIAxXJWfUFHX-CA3UyElBSRUZFUkVOQ0VfREVGQVVMVA==",
                                        "modifyChannelNotificationPreferenceEndpoint": {
                                            "params": "ChhVQ0QyWU9fQV9QVk1nTUROOWpwUnJwVkESAggBGAE%3D"
                                        }
                                    },
                                    "trackingParams": "CAUQmE0iEwiUsf6qgtSIAxXJWfUFHX-CA3U=",
                                    "defaultTooltip": "모든 새 동영상에 대한 알림을 받습니다.",
                                    "toggledTooltip": "모든 새 동영상에 대한 알림을 더 이상 받지 않습니다."
                                }
                            }
                        }
                    },
                    "subtitle": {
                        "runs": [{
                            "text": "구독자 126만명"
                        }]
                    },
                    "trackingParams": "CAMQ5KICIhMIlLH-qoLUiAMVyVn1BR1_ggN1"
                }
            },
            "channelThumbnailEndpoint": {
                "clickTrackingParams": "CAAQru4BIhMIlLH-qoLUiAMVyVn1BR1_ggN1",
                "channelThumbnailEndpoint": {
                    "urlEndpoint": {
                        "clickTrackingParams": "CAAQru4BIhMIlLH-qoLUiAMVyVn1BR1_ggN1",
                        "urlEndpoint": {
                            "url": "/channel/UCD2YO_A_PVMgMDN9jpRrpVA"
                        }
                    }
                }
            }
        }
    },
    "shareButton": {
        "buttonRenderer": {
            "style": "STYLE_OPACITY",
            "size": "SIZE_DEFAULT",
            "isDisabled": false,
            "text": {
                "runs": [{
                    "text": "공유"
                }]
            },
            "icon": {
                "iconType": "SHARE_ARROW"
            },
            "navigationEndpoint": {
                "clickTrackingParams": "CAIQ-N8BIhMIlLH-qoLUiAMVyVn1BR1_ggN1",
                "shareVideoEndpoint": {
                    "videoId": "s2ZWciC68tQ",
                    "videoShareUrl": "https://youtu.be/s2ZWciC68tQ",
                    "videoTitle": "너 나랑 평생가는거야"
                }
            },
            "trackingParams": "CAIQ-N8BIhMIlLH-qoLUiAMVyVn1BR1_ggN1"
        }
    },
    "addToWatchLaterButton": {
        "buttonRenderer": {
            "style": "STYLE_OPACITY",
            "size": "SIZE_DEFAULT",
            "isDisabled": false,
            "text": {
                "runs": [{
                    "text": "나중에 볼 동영상"
                }]
            },
            "serviceEndpoint": {
                "clickTrackingParams": "CAEQ-d8BIhMIlLH-qoLUiAMVyVn1BR1_ggN1",
                "playlistEditEndpoint": {
                    "playlistId": "WL",
                    "actions": [{
                        "addedVideoId": "s2ZWciC68tQ",
                        "action": "ACTION_ADD_VIDEO"
                    }]
                }
            },
            "icon": {
                "iconType": "ADD_TO_WATCH_LATER"
            },
            "trackingParams": "CAEQ-d8BIhMIlLH-qoLUiAMVyVn1BR1_ggN1"
        }
    },
    "videoDurationSeconds": "1808",
    "webPlayerActionsPorting": {
        "getSharePanelCommand": {
            "clickTrackingParams": "CAAQru4BIhMIlLH-qoLUiAMVyVn1BR1_ggN1",
            "webPlayerShareEntityServiceEndpoint": {
                "serializedShareEntity": "CgtzMlpXY2lDNjh0UQ%3D%3D"
            }
        },
        "subscribeCommand": {
            "clickTrackingParams": "CAAQru4BIhMIlLH-qoLUiAMVyVn1BR1_ggN1",
            "subscribeEndpoint": {
                "channelIds": ["UCD2YO_A_PVMgMDN9jpRrpVA"],
                "params": "EgIIBxgA"
            }
        },
        "unsubscribeCommand": {
            "clickTrackingParams": "CAAQru4BIhMIlLH-qoLUiAMVyVn1BR1_ggN1",
            "unsubscribeEndpoint": {
                "channelIds": ["UCD2YO_A_PVMgMDN9jpRrpVA"],
                "params": "CgIIBxgA"
            }
        },
        "addToWatchLaterCommand": {
            "clickTrackingParams": "CAAQru4BIhMIlLH-qoLUiAMVyVn1BR1_ggN1",
            "playlistEditEndpoint": {
                "playlistId": "WL",
                "actions": [{
                    "addedVideoId": "s2ZWciC68tQ",
                    "action": "ACTION_ADD_VIDEO"
                }]
            }
        },
        "removeFromWatchLaterCommand": {
            "clickTrackingParams": "CAAQru4BIhMIlLH-qoLUiAMVyVn1BR1_ggN1",
            "playlistEditEndpoint": {
                "playlistId": "WL",
                "actions": [{
                    "action": "ACTION_REMOVE_VIDEO_BY_VIDEO_ID",
                    "removedVideoId": "s2ZWciC68tQ"
                }]
            }
        }
    }
}