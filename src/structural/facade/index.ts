import { BuilderFacade } from './classes/BuilderFacade';

const bigCheddar1 = BuilderFacade.makeBigCheddarHamburger();
console.log(bigCheddar1.getHamburger());
console.log(bigCheddar1.getPrice());

const bigCheddar2 = BuilderFacade.makeBigCheddarHamburger2();
console.log(bigCheddar2.getHamburger());
console.log(bigCheddar2.getPrice());

const chickenPremium1 = BuilderFacade.makeChickenPremiumHamburger();
console.log(chickenPremium1.getHamburger());
console.log(chickenPremium1.getPrice());

const chickenPremium2 = BuilderFacade.makeChickenPremiumHamburger2();
console.log(chickenPremium2.getHamburger());
console.log(chickenPremium2.getPrice());

const scoobyDoo1 = BuilderFacade.makeScoobyDooHamburger();
console.log(scoobyDoo1.getHamburger());
console.log(scoobyDoo1.getPrice());

const scoobyDoo2 = BuilderFacade.makeScoobyDooHamburger2();
console.log(scoobyDoo2.getHamburger());
console.log(scoobyDoo2.getPrice());
