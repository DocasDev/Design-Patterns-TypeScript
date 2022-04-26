import { CharacterContract } from '../../contracts/CharacterContract';
import { Character } from '../Character';

export class Mage extends Character implements CharacterContract {
	takeDamage(damage: number): void {
		const realDamage = damage - this.resistence * 0.1;
		this.currentLife -= realDamage;
	}
	causeDamage(): number {
		let realDamage = this.attack * 100;
		realDamage += this.dexterity * 50;
		return realDamage;
	}
}
