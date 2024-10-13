// This is the main file that handles all the logic of the project
import Adventurer from "./classes/Adventurer.js";
import Companion from "./classes/Companion.js";
import AdventurerFactory from "./classes/AdventurerFactory.js";

// This is the adventurer object
const adventurer = {
name: 'Robin',
health: 10,
inventory: ['sword', 'potion', 'artifact'],
// part 1.b
companion: {
    name: 'Leo',
    type: 'Cat',
    // part 1.c
    companion: {
    name: 'Frank',
    type: 'Flea',
    inventory: ['small hat', 'sunglasses']
    }
},

// roll method
roll (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)
}
}
adventurer.inventory[0] // 'sword'
// Loop over inventory
for (let i = 0; i < adventurer.inventory.length; i++) {
// console.log(adventurer.inventory[i])
}

// this creates a new adventurer
const robin = new Adventurer('Robin', 'Wizard')
robin.loot("sword", "potion", "potion", "artifact")
robin.health = 50
robin.useHealthPotion()
robin.useHealthPotion()

// this creates a new companion
const leo = new Companion('Leo', 'Cat')
leo.attach(robin)
leo.lendAHand('KitKat bar', robin)
// leo.sayInspirationalQuote()

// this creates a new companion for leo
const frank = new Companion('Frank', 'Flea')
frank.attach(leo)
// frank.sayInspirationalQuote()
frank.lendAHand('potion', leo)

// this creates a new Adventurer using our AdventurerFactory template
const healerFactory = new AdventurerFactory("Wizard")

const gandalf = healerFactory.generate('Gandalf')
const radagastTheBrown = healerFactory.generate('Radagast')

// this runs the duel between the two characters
gandalf.duel(radagastTheBrown)
