import { WeaponContract } from '../../contracts/WeaponContract';

export class Rod implements WeaponContract {
	getAttackBonus(): number {
		return 15;
	}
	getDexterityBonus(): number {
		return 5;
	}
}
