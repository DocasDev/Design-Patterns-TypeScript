import { ArmorContract } from '../../contracts/ArmorContract';

export class Robe implements ArmorContract {
	getLifeBonus(): number {
		return 15;
	}

	getResistenceBonus(): number {
		return 5;
	}
}
