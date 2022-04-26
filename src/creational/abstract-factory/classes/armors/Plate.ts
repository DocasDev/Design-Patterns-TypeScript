import { ArmorContract } from '../../contracts/ArmorContract';

export class Plate implements ArmorContract {
	getLifeBonus(): number {
		return 0;
	}

	getResistanceBonus(): number {
		return 20;
	}
}
