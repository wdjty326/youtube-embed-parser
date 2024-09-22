import type {
} from "@aws-sdk/types";

import { getPlayerVarsEmbed } from "./youtubeUtils";

const handler = async () => {
    const playerVars = await getPlayerVarsEmbed("s2ZWciC68tQ");
};
handler();