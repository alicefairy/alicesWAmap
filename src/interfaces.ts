interface PositionInterface {
    /** x coordinate of the npc */
    x: number,
    /** y coordinate of the npc */
    y: number
}

interface AudioInterface {
    /** Path to the audiofile */
    path: string,
    /** Length of the audiofile */
    duration: number
}

interface NPCInterface {
    /** positional data of the npc */
    position: PositionInterface,
    /** audio meta data for the npc */
    audio: AudioInterface,
    /** ids or strings of the tiles used for animating the npc */
    tiles: (string | number)[],
    /** the layer on which the npc stands (each npc should have its own layer) */
    layer: string
}

export type { NPCInterface, PositionInterface, AudioInterface }