/**
 * Extends the basic ActorSheet
 * @extends {ActorSheet}
 */
export class HunterActorSheet extends ActorSheet {

    /** @override */
    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["altmonsterweek", "sheet", "actor"],
            template: "systems/altmonsterweek/templates/actor/actor-sheet.html",
            width: 600,
            height: 600,
            tabs: [{ navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "features" }]
        });
    }

    /** @override */
    get template() {
        return `systems/altmonsterweek/templates/actor/actor-${this.actor.type}-sheet.html`;
    }

    /** @override */
    getData() {
        //Retrieve data structure
        const context = super.getData();

        //Create a safe clone
        const actorData = this.actor.toObject(false);

        //Add actor system to context.system, for easier access
        context.system = actorData.system;
        context.flags = actorData.flags;

        //Prepare hunter data
        if (actorData.type == 'hunter') {
            this._prepareHunterData(context);
        }

        //Roll data for TinyMCE editors
        context.rolldata = context.actor.getRollData();

        //Active effects

        return context;
    }

    /**
     * Manage hunter data
     * @param {Object} actorData The actor to prepare
     * @return {undefined}
     */
    _prepareHunterData(context) {
        // Ratings
        for (let [k, v] of Object.entries(context.system.ratings)) {
            v.label = game.i18n.localize(CONFIG.ALTMONSTERWEEK.ratings[k]) ?? k;
        }
    }

}