import { MonsterContract } from '../../contracts/MonsterContract';
import { Player } from '../Player';

export class ExperienceEvent {
	protected _experienceBonus: number;

	constructor() {
		this._experienceBonus = 0;
	}

	public getExperienceBonus(
		player: Player,
		monster: MonsterContract,
	): number {
		const diffLevel = player.level - monster.getLevel();
		const mobExperience = monster.getAmountExperience();

		if (diffLevel <= 10) {
			this._experienceBonus = 10;
		}

		return mobExperience + mobExperience * (this._experienceBonus / 100);
	}
}
