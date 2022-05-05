import { MonsterContract } from '../../contracts/MonsterContract';
import { Player } from '../Player';
import { ExperienceEvent } from './ExperienceEvent';

export class ExperienceNewYearEvent extends ExperienceEvent {
	public getExperienceBonus(
		player: Player,
		monster: MonsterContract,
	): number {
		const diffLevel = monster.getLevel() - player.level;
		const mobExperience = monster.getAmountExperience();

		this._experienceBonus = Math.floor(diffLevel / 5) * 0.5;

		return mobExperience + mobExperience * this._experienceBonus;
	}
}
