class Character {
    constructor(lives, attack, defense, type){
        this.lives = lives;
        this.attack = attack;
        this.defense = defense;
        this.type = type;
    }
    getAttack(damage){
        this.lives -= damage - this.defense;
    }
    makeAttack(enemy,damage) {
        enemy.getAttack(damage);
    }
    showState(){
        console.log(`Lives: ${this.lives}`)
    }
}
let magician = new Character(100,20,15,"magic");
let warrior = new Character(90,17,12,"warrior");
let archer = new Character(80,25,10,"archer");
let robot = new Character(130,20,5,"robot");
let ogre = new Character(120,25,10,"ogre");
let ninja = new Character(75,15,20,"ninja");
magician.showState();
warrior.makeAttack(magician,30)
magician.showState();
console.log(magician.type)