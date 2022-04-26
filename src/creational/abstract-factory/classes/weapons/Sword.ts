import { WeaponContract } from '../../contracts/WeaponContract';

export class Sword implements WeaponContract {
	getAttackBonus(): number {
		return 10;
	}
	getDexterityBonus(): number {
		return 10;
	}
}
