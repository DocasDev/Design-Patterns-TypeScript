import { MonsterContract } from '../../contracts/MonsterContract';
import { Player } from '../Player';
import { ExperienceEvent } from './ExperienceEvent';

export class Experience100ThBirthdayEvent extends ExperienceEvent {
	public getExperienceBonus(
		player: Player,
		monster: MonsterContract,
	): number {
		const mobExperience = monster.getAmountExperience();

		this._experienceBonus = 1.5;

		return mobExperience + mobExperience * this._experienceBonus;
	}
}
