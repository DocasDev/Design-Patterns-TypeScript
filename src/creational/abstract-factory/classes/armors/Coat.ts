import { ArmorContract } from '../../contracts/ArmorContract';

export class Coat implements ArmorContract {
	getLifeBonus(): number {
		return 10;
	}

	getResistanceBonus(): number {
		return 10;
	}
}
