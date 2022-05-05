import { ExperienceEvent } from './Events/ExperienceEvent';
import { MonsterContract } from '../contracts/MonsterContract';
import { Player } from './Player';

export class Game {
	private _player: Player;
	private _experienceEvent: ExperienceEvent;

	constructor(player: Player) {
		this._player = player;
		this._experienceEvent = new ExperienceEvent();
	}

	public defeatMonster(monster: MonsterContract): void {
		this._player.receiveExperience(
			this._experienceEvent.getExperienceBonus(this._player, monster),
		);
	}

	public setExperienceEvent(event: ExperienceEvent): void {
		this._experienceEvent = event;
	}
}
