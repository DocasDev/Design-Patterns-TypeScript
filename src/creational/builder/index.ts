import { BigCheddarHamburguerBuilder } from './classes/Hamburguers/BigCheddarHamburguerBuilder';
import { ChickenPremiumHamburguerBuilder } from './classes/Hamburguers/ChickenPremiumHamburguerBuilder';
import { ScoobyDooHamburguerBuilder } from './classes/Hamburguers/ScoobyDooHamburguerBuilder';

const bigCheddarHamburguerBuilder = new BigCheddarHamburguerBuilder();
const bigCheddar1 = bigCheddarHamburguerBuilder
	.reset()
	.mount()
	.addSalad()
	.addSauce();
console.log(bigCheddar1.getHamburguer());
console.log(bigCheddar1.getPrice());

const bigCheddar2 = bigCheddarHamburguerBuilder.reset().mount().addSauce();
console.log(bigCheddar2.getHamburguer());
console.log(bigCheddar2.getPrice());

const chickenPremiumHamburgerBuilder = new ChickenPremiumHamburguerBuilder();
const chickenPremium1 = chickenPremiumHamburgerBuilder.reset().mount();
console.log(chickenPremium1.getHamburguer());
console.log(chickenPremium1.getPrice());

const chickenPremium2 = chickenPremiumHamburgerBuilder
	.reset()
	.mount()
	.addSauce();
console.log(chickenPremium2.getHamburguer());
console.log(chickenPremium2.getPrice());

const scoobyDooHamburgerBuilder = new ScoobyDooHamburguerBuilder();
const scoobyDoo1 = scoobyDooHamburgerBuilder
	.reset()
	.mount()
	.addSalad()
	.addSauce();
console.log(scoobyDoo1.getHamburguer());
console.log(scoobyDoo1.getPrice());

const scoobyDoo2 = scoobyDooHamburgerBuilder
	.reset()
	.mount()
	.mount()
	.addSalad()
	.addSalad()
	.addSauce()
	.addSauce();
console.log(scoobyDoo2.getHamburguer());
console.log(scoobyDoo2.getPrice());
