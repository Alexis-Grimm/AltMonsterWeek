//Import sheet classes
import { HunterActorSheet } from "./sheets/hunter-sheet.mjs"

/* Init Hook */

Hooks.once("init", async function() {


    //Register sheet classes
    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("altmonsterweek", HunterActorSheet, { makeDefault: true })

    return preloadHandlebarsTemplates();

});

/* Ready Hook */

//Hooks.once("ready", async function() {
//});