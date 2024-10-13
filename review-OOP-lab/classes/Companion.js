import Character from "./Character.js"
// We need to import the Character class because it is used in this class
export default class Companion extends Character {
    constructor(name, type) {
        super(name)
        this.type = type
        this.inventory.push('potion', 'KitKat bar')
    }
    // these are the methods that will be used by the Companion class
    attach(adventurer) {
        adventurer.companion = this
    }

    lendAHand(item, character) {
        const foundItemIndex = this.inventory.indexOf(item)
        if (foundItemIndex >= 0) {
        character.inventory.push(item);
        this.inventory.splice(foundItemIndex, 1)
        console.log(`${this.name} lended ${character.name} a ${item}`)
        } else {
        console.log(`${this.name} does not have ${item} in their inventory`)
        }
    }

    // This is an API call to get a random quote from Real Inspire for this companion
    async sayInspirationalQuote() {
        const response = await fetch('https://api.realinspire.tech/v1/quotes/random')
        const data = await response.json()
        console.log(`${this.name} says: ${data[0].content}`)
    }
}
