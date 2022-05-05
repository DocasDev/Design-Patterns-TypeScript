import { MonsterContract } from '../../contracts/MonsterContract';
import { Player } from '../Player';
import { ExperienceEvent } from './ExperienceEvent';

export class ExpecienceNewYearEvent extends ExperienceEvent {
	public getExperienceBonus(
		player: Player,
		monster: MonsterContract,
	): number {
		const diffLevel = player.level - monster.getLevel();
		const mobExperience = monster.getAmountExperience();

		if (diffLevel <= 20) {
			this._experienceBonus = 500;
		}

		return mobExperience + mobExperience * (this._experienceBonus / 100);
	}
}
