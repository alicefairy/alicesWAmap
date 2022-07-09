import { NPCInterface } from "./interfaces";

export default function getNPCList() : NPCInterface[] {
    return [
        {
            position: {
                x: 26,
                y: 2,
            },

            audio: {
                path: "assets/audio/einführung.wav",
                duration: 20
            },
            tiles: [
                "pers_0_0",
                "pers_0_1"
            ],
            layer: "Sound"
        }
    ]
}
