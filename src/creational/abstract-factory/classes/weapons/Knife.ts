import { WeaponContract } from '../../contracts/WeaponContract';

export class Knife implements WeaponContract {
	getAttackBonus(): number {
		return 5;
	}
	getDexterityBonus(): number {
		return 15;
	}
}
