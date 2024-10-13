const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["small hat", "sunglasses"]
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        return result
        }
}
adventurer.inventory[0] // "sword"

for (let i = 0; i < adventurer.inventory.length; i++) {
    console.log(adventurer.inventory[i])
}

// console.log(adventurer.companion.companion.inventory[1]) // "sunglasses"
// // roll a random number
// adventurer.roll();
class Character {
    static MAX_HEALTH = 100;
    constructor (name) {
        this.name = name;
        this.health = 100;
        this.inventory = [];
        this.companion = null;
    }

    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }

    loot(...items) {
        const roll = this.roll();
        if (roll > 5) {
            this.console.log(`${this.name} is looting area for items...
                found ${items.join(", ")}`);
    } else {
        console.log(`${this.name} was unlucky and found nothing :(`)
    }
    }
}

class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"];
    constructor (name, role) {
        super(name);
        if (Adventurer.ROLES.includes(role)) {
            // Adventurers have specialized roles
            this.role = role;
        } else {
            const randomNum = Math.floor(Math.random() * Adventurer.ROLES.length);
            this.role = Adventurer.ROLES[randomNum];
        }

        // Every adventurer starts with a bed and 50 gold coins
        this.inventory.push("bedroll", "50 gold coins");
    }

    scout () {
        console.log(`${this.name} is scouting ahead...`);
        super.roll();
    }

    // loot(...items) {
    //     const roll = this.roll();
    //     if (roll > 5) {
    //         this.console.log(`${this.name} is looting area for items...
    //             found ${items.join(", ")}`);
    // } else {
    //     this.console.log(`${this.name} was unlucky and found nothing :(`)
    // }
    // }

    useHealthPotion() {
        if (this.inventory.includes("potion")) {
            if ((this.health  + 25) > Character.MAX_HEALTH) {
                this.health = Character.MAX_HEALTH;
            } else {
                this.health += 25;
            }
            // Remove the potion from the inventory
            this.inventory.splice(this.inventory.indexOf("potion"), 1);
        }
    }

    duel(enemy) {
        let round = 1
        while (this.health > 50 && enemy.health > 50) {
          const thisRoll = this.roll()
          const enemyRoll = enemy.roll()
          if (thisRoll > enemyRoll) {
            enemy.health -= 1;
            console.log(`${this.name} struck!`)
          } else if (thisRoll < enemyRoll) {
            this.health -= 1
            console.log(`${enemy.name} struck!`)
          } else {
            console.log(`
              /////////ROUND ${round}///////////////
                            DRAW
              ///////////////////////////////////////
              `)
              round++
              continue
          }
          console.log(`
            /////////ROUND ${round}///////////////
            ${this.name}'s Health: ${this.health}
            ${enemy.name}'s Health: ${enemy.health}
            ///////////////////////////////////////
            `)
          round++
        }
        const winner = this.health > enemy.health ? this.name : enemy.name
        console.log(`${winner} WINS!!!`)
      }
}

class Companion extends Character {
    constructor (name, type) {
        super(name);
        this.type = type;
        this.inventory.push("potion", "KitKat bar");
    }
    attach(adventurer) {
        adventurer.companion = this;
    }
    lendAHand(item, character) {
        const foundItemIndex = this.inventory.indexOf(item);
        if (foundItemIndex >= 0) {
            character.inventory.push(item);
            this.inventory.splice(foundItemIndex, 1);
            console.log(`${this.name} lended ${character.name} ${item}.`);
        } else {
            console.log(`${this.name} does not have ${item} in their inventory.`);
        }
    }
    async sayInspirationalQuote() {
        const response = await fetch('https://api.realinspire.tech/v1/quotes/random')
        const data = await response.json()
        console.log(`${this.name} says: ${data[0].content}`)
    }
}


// const robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];
// console.log(robin)
// robin.companion.roll() // Leo
// robin.companion.companion.roll() //

const robin = new Adventurer("Robin", "fighter");
robin.loot("sword", "potion", "artifact");

const leo = new Companion("Leo", "Cat");
leo.attach(robin);
leo.lendAHand("KitKat bar", robin);
leo.sayInspirationalQuote();

const frank = new Companion("Frank", "Flea");
frank.attach(leo);
frank.sayInspirationalQuote();
frank.lendAHand("potion", leo);

class AdventurerFactory {
    constructor (role) {
        this.role = role;
        this.adventurers = [];
    }
    generate (name) {
        const newAdventurer = new Adventurer(name, this.role);
        this.adventurers.push(newAdventurer);
        return newAdventurer;
    }
    findByIndex (index) {
        return this.adventurers[index];
    }
    findByName (name) {
        return this.adventurers.find((a) => a.name === name);
    }
}

const healerFactory = new AdventurerFactory("Healer");
const gandalf = healerFactory.generate("Gandalf");
const radagastTheBrown = healerFactory.generate("radagastTheBrown");
console.log(gandalf)

gandalf.duel(radagastTheBrown)
