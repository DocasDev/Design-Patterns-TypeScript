import { CharacterContract } from '../../contracts/CharacterContract';
import { Character } from '../Character';

export class Assassin extends Character implements CharacterContract {
	takeDamage(damage: number): void {
		const realDamage = damage - this.resistence * 0.2;
		this.currentLife -= realDamage;
	}
	causeDamage(): number {
		let realDamage = this.attack * 50;
		realDamage += this.dexterity * 100;
		return realDamage;
	}
}
