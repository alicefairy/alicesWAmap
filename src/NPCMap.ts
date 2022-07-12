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
                0,
                1
            ],
            layer: "Sound"
        }
    ]
}
