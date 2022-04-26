import { ArmorContract } from '../../contracts/ArmorContract';

export class Robe implements ArmorContract {
	getLifeBonus(): number {
		return 1500;
	}

	getResistanceBonus(): number {
		return 5;
	}
}
