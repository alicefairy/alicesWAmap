import { Sound } from "@workadventure/iframe-api-typings/Api/iframe/Sound/Sound";
import "./interfaces";
import { NPCInterface } from "./interfaces";

class NPC {
    readonly npc : NPCInterface;
    readonly audioObject : Sound;
    currentTileIndex: number = 0;
    
    readonly config: object = {
        volume : 0.5,
        loop : false,
        rate : 1,
        detune : 1,
        delay : 0,
        seek : 0,
        mute : false
    }
    
    speakInterval1: ReturnType<typeof setInterval> | undefined;
    speakInterval2: ReturnType<typeof setInterval> | undefined;
    durationTimeout: ReturnType<typeof setTimeout> | undefined;
    
    /**
     * Enables NPCs to show a speaking animation and handles playing audio
     * @param npc The NPC metadata to be used
     */
    constructor(npc: NPCInterface) {
        this.npc = npc
        this.audioObject = WA.sound.loadSound(this.npc.audio.path);

        WA.room.onEnterLayer(this.npc.layer).subscribe(() => {
            this.startSpeaking(200)
        });
    
        WA.room.onLeaveLayer(this.npc.layer).subscribe(() => {
            this.stopSpeaking()
        });
    }
    
    /**
    * @desc starts speaking animation and plays sound file
    * @param speed mouth movement in ms
    */
    startSpeaking (speed = 800) {
        this.audioObject.play(this.config);

        // only animate when tiles are provided
        if (this.npc.tiles.length) {
            this.speakInterval1 = setInterval(() => {
                WA.room.setTiles([{
                    x: this.npc.position.x,
                    y: this.npc.position.y,
                    tile: this.nextTile(),
                    layer: this.npc.layer
                }]);
            }, speed)
            setTimeout(() => {
                this.speakInterval2 = setInterval(() => {
                    WA.room.setTiles([{
                        x: this.npc.position.x,
                        y: this.npc.position.y,
                        tile: this.nextTile(),
                        layer: this.npc.layer
                    }]);
                }, speed)
            }, speed / 2)
        }

        this.durationTimeout = setTimeout(() => {
            this.stopSpeaking()
        }, this.npc.audio.duration * 1000)
    }
    
    /**
    * @desc stops speaking animation, stops sound file and resets the tile to default
    */
    stopSpeaking() {
        try {
            // try clearing the intervals. fails, if none were started in the first place due to lacking tile array
            clearInterval(this.speakInterval1)
            clearInterval(this.speakInterval2)
            clearTimeout(this.durationTimeout)
        } finally {
            this.audioObject.stop()
            
            // reset npc to default tiles
            WA.room.setTiles([{
                x: this.npc.position.x,
                y: this.npc.position.y,
                tile: this.npc.tiles[0],
                layer: this.npc.layer
            }]);
        }
    }

    /**
     * 
     * @returns the next tile id for the speaking animation
     */
    nextTile(): (string | number) {
        const nextIndex = (this.currentTileIndex + 1) % this.npc.tiles.length;
        this.currentTileIndex++;
        return this.npc.tiles[nextIndex];
    }
};

export default NPC