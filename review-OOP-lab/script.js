import Adventurer from "./classes/Adventurer.js";
import Companion from "./classes/Companion.js";
import AdventurerFactory from "./classes/AdventurerFactory.js";

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

const robin = new Adventurer('Robin', 'Wizard')
robin.loot("sword", "potion", "potion", "artifact")
robin.health = 50
robin.useHealthPotion()
robin.useHealthPotion()

const leo = new Companion('Leo', 'Cat')
leo.attach(robin)
leo.lendAHand('KitKat bar', robin)
// leo.sayInspirationalQuote()

const frank = new Companion('Frank', 'Flea')
frank.attach(leo)
// frank.sayInspirationalQuote()
frank.lendAHand('potion', leo)

const healerFactory = new AdventurerFactory("Wizard")

const gandalf = healerFactory.generate('Gandalf')
const radagastTheBrown = healerFactory.generate('Radagast')

gandalf.duel(radagastTheBrown)
