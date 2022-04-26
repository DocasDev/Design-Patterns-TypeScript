import { MageFactory } from './classes/factories/MageFactory';
import { AssassinFactory } from './classes/factories/AssassinFactory';
import { SwordsmanFactory } from './classes/factories/SwordsmanFactory';

const mageFactory = new MageFactory();
const assassinFactory = new AssassinFactory();
const swordsmanFactory = new SwordsmanFactory();
console.log('\n--------\n');
const mage1 = mageFactory.createCharacter();
mage1.attachWeapon(mageFactory.createWeapon());
mage1.attachArmor(mageFactory.createArmor());
console.log(mage1);
mage1.takeDamage(100);
console.log(`Mage Damage: ${mage1.causeDamage()}`);
console.log(mage1);
console.log('\n--------\n');

console.log('\n--------\n');
const assasin1 = assassinFactory.createCharacter();
assasin1.attachWeapon(assassinFactory.createWeapon());
assasin1.attachArmor(assassinFactory.createArmor());
console.log(assasin1);
assasin1.takeDamage(100);
console.log(`Mage Damage: ${assasin1.causeDamage()}`);
console.log(assasin1);
console.log('\n--------\n');

console.log('\n--------\n');
const swordsman1 = swordsmanFactory.createCharacter();
swordsman1.attachWeapon(swordsmanFactory.createWeapon());
swordsman1.attachArmor(swordsmanFactory.createArmor());
console.log(swordsman1);
swordsman1.takeDamage(100);
console.log(`Mage Damage: ${swordsman1.causeDamage()}`);
console.log(swordsman1);
console.log('\n--------\n');
