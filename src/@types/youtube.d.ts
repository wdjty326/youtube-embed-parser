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
        thumbnailPreviewRenderer: ThumbnailPreviewRenderer;
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
        errorScreen?: {
            playerErrorMessageRenderer: PlayerErrorMessageRenderer;
        };
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
    subreason: RendererText;
    reason: RendererText;
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
    thumbnail: RendererThumbnails;
    icon: {
        iconType: string;
    };
}

interface ThumbnailPreviewRenderer {
    title: RendererText;
    defaultThumbnail: RendererThumbnails;
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
                label: string;
            };
            trackingParams: string;
        }
    };
    videoDetails: {
        embeddedPlayerOverlayVideoDetailsRenderer: {
            channelThumbnail: RendererThumbnails;
            collapsedRenderer: {
                embeddedPlayerOverlayVideoDetailsCollapsedRenderer: {
                    title: {
                        runs: Array<{
                            title: string;
                            navigationEndpoint: {
                                clickTrackingParams: string;
                                urlEndpoint: {
                                    url: string;
                                };
                            };
                        }>;
                    };
                    subtitle: RendererText;
                    trackingParams: string;
                };
            };
            expandedRenderer: {
                embeddedPlayerOverlayVideoDetailsExpandedRenderer: {
                    title: RendererText;
                    subscribeButton: {
                        subscribeButtonRenderer: {
                            buttonText: RendererText;
                            subscribed: boolean;
                            enabled: boolean;
                            type: string;
                            channelId: string;
                            showPreferences: boolean;
                            subscribedButtonText: RendererText;
                            unsubscribedButtonText: RendererText;
                            trackingParams: string;
                            unsubscribeButtonText: RendererText;
                            serviceEndpoints: Array<{
                                clickTrackingParams: string;
                                subscribeEndpoint: {
                                    channelIds: string[];
                                    params: string;
                                }
                            }>;
                            notificationPreferenceToggleButton: {
                                toggleButtonRenderer: {
                                    isToggled: string;
                                    isDisabled: string;
                                    defaultIcon: {
                                        iconType: string;
                                    };
                                    defaultServiceEndpoint: {
                                        clickTrackingParams: string;
                                        modifyChannelNotificationPreferenceEndpoint: {
                                            params: string;
                                        };
                                    };
                                    toggledIcon: {
                                        iconType: string;
                                    };
                                    toggledServiceEndpoint: {
                                        clickTrackingParams: string;
                                        modifyChannelNotificationPreferenceEndpoint: {
                                            params: string;
                                        };
                                    };
                                    trackingParams: string;
                                    defaultTooltip: string;
                                    toggledTooltip: string;
                                };
                            };
                        };
                    };
                    subtitle: RendererText;
                    trackingParams: string;
                };
            };
            channelThumbnailEndpoint: {
                clickTrackingParams: string;
                channelThumbnailEndpoint: {
                    urlEndpoint: {
                        clickTrackingParams: string;
                        urlEndpoint: {
                            url: string;
                        };
                    };
                };
            };
        };
    };
    shareButton: {
        buttonRenderer: {
            style: string;
            size: string;
            isDisabled: boolean;
            text: RendererText;
            icon: {
                iconType: string;
            };
            navigationEndpoint: {
                clickTrackingParams: string;
                shareVideoEndpoint: {
                    videoId: string;
                    videoShareUrl: string;
                    videoTitle: string;
                };
            };
            trackingParams: string;
        };
    };
    addToWatchLaterButton: {
        buttonRenderer: {
            style: string;
            size: string;
            isDisabled: boolean;
            text: RendererText;
            serviceEndpoint: {
                clickTrackingParams: string;
                playlistEditEndpoint: {
                    playlistId: string;
                    actions: Array<{
                        addedVideoId: string;
                        action: string;
                    }>;
                };
            };
            icon: {
                iconType: string;
            };
            trackingParams: string;
        }
    },
    videoDurationSeconds: string;
    webPlayerActionsPorting: {
        getSharePanelCommand: {
            clickTrackingParams: string;
            webPlayerShareEntityServiceEndpoint: {
                serializedShareEntity: string;
            };
        };
        subscribeCommand: {
            clickTrackingParams: string;
            subscribeEndpoint: {
                channelIds: string[];
                params: string;
            };
        };
        unsubscribeCommand: {
            clickTrackingParams: string;
            unsubscribeEndpoint: {
                channelIds: string[];
                params: string;
            };
        };
        addToWatchLaterCommand: {
            clickTrackingParams: string;
            playlistEditEndpoint: {
                playlistId: string;
                actions: Array<{
                    addedVideoId: string;
                    action: string;
                }>;
            };
        };
        removeFromWatchLaterCommand: {
            clickTrackingParams: string;
            playlistEditEndpoint: {
                playlistId: string;
                actions: Array<{
                    action: string;
                    removedVideoId: string;
                }>;
            }
        }
    }
}

type RendererText = {
    runs: Array<{
        text: string;
    }>;
}

type RendererThumbnails = {
    thumbnails: Array<{
        url: string;
        width: number;
        height: number;
    }>;
};