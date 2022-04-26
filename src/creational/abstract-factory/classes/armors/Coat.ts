import { ArmorContract } from '../../contracts/ArmorContract';

export class Coat implements ArmorContract {
	getLifeBonus(): number {
		return 500;
	}

	getResistanceBonus(): number {
		return 10;
	}
}
