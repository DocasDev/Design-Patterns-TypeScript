import { ArmorContract } from '../../contracts/ArmorContract';

export class Coat implements ArmorContract {
	getLifeBonus(): number {
		return 10;
	}

	getResistenceBonus(): number {
		return 10;
	}
}
