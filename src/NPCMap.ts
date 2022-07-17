import { NPCInterface } from "./interfaces";

export default function getNPCList() : NPCInterface[] {
    return [
        //Paul
        {
            position: {
                x: 25,
                y: 15,
            },

            audio: {
                path: "assets/audio/einfuehrung.mp3",
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
                path: "assets/audio/definition.mp3",
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
                path: "assets/audio/mehrwerte.mp3",
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
                path: "assets/audio/lizenzen.mp3",
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
                path: "assets/audio/wahrnehmung-kritik.mp3",
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
                path: "assets/audio/outro.mp3",
                duration: 18
            },
            tiles: [],
            layer: "Philipp"
        }
    ]
}
