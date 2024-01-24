class Hero {
    constructor(name, age, type) {
        this.name = name;
        this.age = age;
        this.type = type;
    }

    offensive() {
        let attack;
        switch (this.type) {
            case 'mage':
                attack = 'magic';
                break;
            case 'warrior':
                attack = 'sword';
                break;
            case 'monk':
                attack = 'martial arts';
                break;
            case 'ninja':
                attack = 'shuriken';
                break;
        }
        console.log(`O Herói ${this.name} da classe ${this.type} atacou usando ${attack}.`);
    }
}

let hero1 = new Hero('Halloween1', '29', 'mage');
let hero2 = new Hero('Halloween2', '29', 'warrior');
let hero3 = new Hero('Halloween3', '29', 'monk');
let hero4 = new Hero('Halloween4', '29', 'ninja');
hero1.offensive();
hero2.offensive();
hero3.offensive();
hero4.offensive();
