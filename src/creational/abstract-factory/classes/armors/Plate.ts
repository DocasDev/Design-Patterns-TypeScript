import { ArmorContract } from '../../contracts/ArmorContract';

export class Plate implements ArmorContract {
	getLifeBonus(): number {
		return 100;
	}

	getResistanceBonus(): number {
		return 20;
	}
}
