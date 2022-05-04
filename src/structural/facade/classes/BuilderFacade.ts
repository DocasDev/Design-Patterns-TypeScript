import { BigCheddarHamburgerBuilder } from '../../../creational/builder/classes/HamburgerBuilders/BigCheddarHamburgerBuilder';
import { ChickenPremiumHamburgerBuilder } from '../../../creational/builder/classes/HamburgerBuilders/ChickenPremiumHamburgerBuilder';
import { ScoobyDooHamburgerBuilder } from '../../../creational/builder/classes/HamburgerBuilders/ScoobyDooHamburgerBuilder';

export abstract class BuilderFacade {
	static makeBigCheddarHamburger(): BigCheddarHamburgerBuilder {
		const bigCheddarHamburgerBuilder = new BigCheddarHamburgerBuilder();
		const bigCheddar1 = bigCheddarHamburgerBuilder
			.reset()
			.mount()
			.addSalad()
			.addSauce();
		return bigCheddar1;
	}

	static makeBigCheddarHamburger2(): BigCheddarHamburgerBuilder {
		const bigCheddarHamburgerBuilder = new BigCheddarHamburgerBuilder();
		const bigCheddar2 = bigCheddarHamburgerBuilder
			.reset()
			.mount()
			.addSauce();
		return bigCheddar2;
	}

	static makeChickenPremiumHamburger(): ChickenPremiumHamburgerBuilder {
		const chickenPremiumHamburgerBuilder =
			new ChickenPremiumHamburgerBuilder();
		const chickenPremium1 = chickenPremiumHamburgerBuilder.reset().mount();
		return chickenPremium1;
	}

	static makeChickenPremiumHamburger2(): ChickenPremiumHamburgerBuilder {
		const chickenPremiumHamburgerBuilder =
			new ChickenPremiumHamburgerBuilder();
		const chickenPremium2 = chickenPremiumHamburgerBuilder
			.reset()
			.mount()
			.addSauce();
		return chickenPremium2;
	}

	static makeScoobyDooHamburger(): ScoobyDooHamburgerBuilder {
		const scoobyDooHamburgerBuilder = new ScoobyDooHamburgerBuilder();
		const scoobyDoo1 = scoobyDooHamburgerBuilder
			.reset()
			.mount()
			.addSalad()
			.addSauce();
		return scoobyDoo1;
	}

	static makeScoobyDooHamburger2(): ScoobyDooHamburgerBuilder {
		const scoobyDooHamburgerBuilder = new ScoobyDooHamburgerBuilder();
		const scoobyDoo2 = scoobyDooHamburgerBuilder
			.reset()
			.mount()
			.mount()
			.addSalad()
			.addSalad()
			.addSauce()
			.addSauce();
		return scoobyDoo2;
	}
}
