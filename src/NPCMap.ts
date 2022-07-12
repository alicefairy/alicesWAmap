import { NPCInterface } from "./interfaces";

export default function getNPCList() : NPCInterface[] {
    return [
        //LehrerIn
        {
            position: {
                x: 1,
                y: 5,
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
        },
        //Paul
        {
            position: {
                x: 26,
                y: 15,
            },

            audio: {
                path: "assets/audio/einführung.wav",
                duration: 20
            },
            tiles: [
                0,
                1
            ],
            layer: "Paul"
        },
        //Frau1
        {
            position: {
                x: 24,
                y: 3,
            },

            audio: {
                path: "assets/audio/definition.wav",
                duration: 88
            },
            tiles: [
                0,
                1
            ],
            layer: "Frau1"
        },
        //Frau2
        {
            position: {
                x: 43,
                y: 3,
            },

            audio: {
                path: "assets/audio/mehrwerte.wav",
                duration: 71
            },
            tiles: [
                0,
                1
            ],
            layer: "Frau2"
        },
        //Anzug
        {
            position: {
                x: 45,
                y: 16,
            },

            audio: {
                path: "assets/audio/lizenzen.wav",
                duration: 87
            },
            tiles: [
                0,
                1
            ],
            layer: "Anzug"
        },
        //Kostüm
        {
            position: {
                x: 43,
                y: 27,
            },

            audio: {
                path: "assets/audio/wahrnehmung und kritik.wav",
                duration: 96
            },
            tiles: [
                0,
                1
            ],
            layer: "Kostüm"
        },
        //Philipp
        {
            position: {
                x: 25,
                y: 27,
            },

            audio: {
                path: "assets/audio/outro.wav",
                duration: 18
            },
            tiles: [
                0,
                1
            ],
            layer: "Philipp"
        }
    ]
}
