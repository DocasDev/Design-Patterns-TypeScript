import { ArmorContract } from '../../contracts/ArmorContract';

export class Plate implements ArmorContract {
	getLifeBonus(): number {
		return 0;
	}

	getResistenceBonus(): number {
		return 20;
	}
}
