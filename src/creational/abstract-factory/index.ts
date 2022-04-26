import { MageFactory } from './classes/factories/MageFactory';
import { AssassinFactory } from './classes/factories/AssassinFactory';
import { SwordsmanFactory } from './classes/factories/SwordsmanFactory';

const mageFactory = new MageFactory();
const assassinFactory = new AssassinFactory();
const swordsmanFactory = new SwordsmanFactory();
console.log('\n--------\n');
const mage1 = mageFactory.createCharacter('Aqua Girl');
mage1.attachWeapon(mageFactory.createWeapon());
mage1.attachArmor(mageFactory.createArmor());
console.log(mage1);
console.log(`Mage Damage: ${mage1.causeDamage()}`);
mage1.takeDamage(2535);
mage1.levelUp(99);
console.log(mage1);
console.log(`Mage Damage: ${mage1.causeDamage()}`);
console.log('\n--------\n');

console.log('\n--------\n');
const assassin1 = assassinFactory.createCharacter('Alkhema');
assassin1.attachWeapon(assassinFactory.createWeapon());
assassin1.attachArmor(assassinFactory.createArmor());
assassin1.takeDamage(1545);
console.log(assassin1);
console.log(`Mage Damage: ${assassin1.causeDamage()}`);
console.log('\n--------\n');

console.log('\n--------\n');
const swordsman1 = swordsmanFactory.createCharacter('Aryan');
swordsman1.attachWeapon(swordsmanFactory.createWeapon());
swordsman1.attachArmor(swordsmanFactory.createArmor());
swordsman1.takeDamage(3598);
console.log(swordsman1);
console.log(`Mage Damage: ${swordsman1.causeDamage()}`);
console.log('\n--------\n');
