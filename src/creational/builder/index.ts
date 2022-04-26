import { BigCheddarHamburgerBuilder } from './classes/HamburgerBuilders/BigCheddarHamburgerBuilder';
import { ChickenPremiumHamburgerBuilder } from './classes/HamburgerBuilders/ChickenPremiumHamburgerBuilder';
import { ScoobyDooHamburgerBuilder } from './classes/HamburgerBuilders/ScoobyDooHamburgerBuilder';

const bigCheddarHamburgerBuilder = new BigCheddarHamburgerBuilder();
const bigCheddar1 = bigCheddarHamburgerBuilder
	.reset()
	.mount()
	.addSalad()
	.addSauce();
console.log(bigCheddar1.getHamburger());
console.log(bigCheddar1.getPrice());

const bigCheddar2 = bigCheddarHamburgerBuilder.reset().mount().addSauce();
console.log(bigCheddar2.getHamburger());
console.log(bigCheddar2.getPrice());

const chickenPremiumHamburgerBuilder = new ChickenPremiumHamburgerBuilder();
const chickenPremium1 = chickenPremiumHamburgerBuilder.reset().mount();
console.log(chickenPremium1.getHamburger());
console.log(chickenPremium1.getPrice());

const chickenPremium2 = chickenPremiumHamburgerBuilder
	.reset()
	.mount()
	.addSauce();
console.log(chickenPremium2.getHamburger());
console.log(chickenPremium2.getPrice());

const scoobyDooHamburgerBuilder = new ScoobyDooHamburgerBuilder();
const scoobyDoo1 = scoobyDooHamburgerBuilder
	.reset()
	.mount()
	.addSalad()
	.addSauce();
console.log(scoobyDoo1.getHamburger());
console.log(scoobyDoo1.getPrice());

const scoobyDoo2 = scoobyDooHamburgerBuilder
	.reset()
	.mount()
	.mount()
	.addSalad()
	.addSalad()
	.addSauce()
	.addSauce();
console.log(scoobyDoo2.getHamburger());
console.log(scoobyDoo2.getPrice());
