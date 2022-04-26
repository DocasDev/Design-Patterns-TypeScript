import { CharacterContract } from '../../contracts/CharacterContract';
import { Character } from '../Character';

export class Swordsman extends Character implements CharacterContract {
	takeDamage(damage: number): void {
		const realDamage = damage - this.resistence * 0.3;
		this.currentLife -= realDamage;
	}
	causeDamage(): number {
		let realDamage = this.attack * 75;
		realDamage += this.dexterity * 75;
		return realDamage;
	}
}
