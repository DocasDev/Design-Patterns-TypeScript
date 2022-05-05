import { MonsterContract } from '../../contracts/MonsterContract';
import { Player } from '../Player';
import { ExperienceEvent } from './ExperienceEvent';

export class ExperienceNewYearEvent extends ExperienceEvent {
	public getExperienceBonus(
		player: Player,
		monster: MonsterContract,
	): number {
		const diffLevel = player.level - monster.getLevel();
		const mobExperience = monster.getAmountExperience();

		if (diffLevel <= 20) {
			this._experienceBonus = 100;
		}

		return mobExperience + mobExperience * (this._experienceBonus / 100);
	}
}
