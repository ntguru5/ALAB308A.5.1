import Adventurer from "./Adventurer.js";
// We need to import the Adventurer class because it is used in this class
export default class AdventurerFactory {
    constructor (role) {
        this.role = role;
        this.adventurers = [];
    }
    // These are the methods that will be used by the AdventurerFactory class
    generate (name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
        return newAdventurer
    }
    findByIndex (index) {
        return this.adventurers[index];
    }
    findByName (name) {
        return this.adventurers.find((a) => a.name === name);
    }
}
