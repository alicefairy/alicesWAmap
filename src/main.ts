/// <reference types="@workadventure/iframe-api-typings" />


import { bootstrapExtra } from "@workadventure/scripting-api-extra";
import NPC from "./NPC";
import getNPCList from "./NPCMap"

let currentPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {

    // teachers popup in static code because abstraction isn't worth it for this one usecase
    WA.room.onEnterLayer('popuptrigger').subscribe(() => {
        WA.ui.openPopup('teacherPopup', 'Oh man,ich weiß nicht mehr weiter!', [{
            label: 'Weiter',
            callback: (popup) => {
                popup.close()
                WA.ui.openPopup('teacherPopup', 'Ich komme mit dem ganzen Arbeitsblätter erstellen einfach nicht hinterher...', [{
                    label: 'Schließen',
                    callback: (popup) => {
                        popup.close()
                    }
                }])     
            }
        }]) 
    });

    WA.room.onEnterLayer('clockZone').subscribe(() => {
        const today = new Date();
        const time = today.getHours() + ":" + today.getMinutes();
        currentPopup = WA.ui.openPopup("clockPopup","It's " + time,[]);
    })

    WA.room.onLeaveLayer('clockZone').subscribe(closePopUp)

    // initialise all npcs
    getNPCList().forEach(npc => {
        new NPC(npc)
    });

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopUp(){
    if (currentPopup !== undefined) {
        currentPopup.close();
        currentPopup = undefined;
    }
}

export {};
