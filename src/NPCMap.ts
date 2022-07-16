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
                x: 25,
                y: 15,
            },

            audio: {
                path: "assets/audio/einführung.wav",
                duration: 20
            },
            tiles: [
                'paul_0',
                'paul_1'
            ],
            layer: "Paul"
        },
        //Frau1
        {
            position: {
                x: 26,
                y: 3,
            },

            audio: {
                path: "assets/audio/definition.wav",
                duration: 88
            },
            tiles: [
                'frau1_0',
                'frau1_1'
            ],
            layer: "Frau1"
        },
        //Frau2
        {
            position: {
                x: 42,
                y: 3,
            },

            audio: {
                path: "assets/audio/mehrwerte.wav",
                duration: 71
            },
            tiles: [
                'frau2_0',
                'frau2_1'
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
                'anzug_0',
                'anzug_1'
            ],
            layer: "Anzug"
        },
        //Kostüm
        {
            position: {
                x: 42,
                y: 27,
            },

            audio: {
                path: "assets/audio/wahrnehmung und kritik.wav",
                duration: 96
            },
            tiles: [],
            layer: "Kostüm"
        },
        //Philipp
        {
            position: {
                x: 26,
                y: 27,
            },

            audio: {
                path: "assets/audio/outro.wav",
                duration: 18
            },
            tiles: [],
            layer: "Philipp"
        }
    ]
}
