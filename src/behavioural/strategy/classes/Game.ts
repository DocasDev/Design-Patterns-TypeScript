import { ExperienceEvent } from './Events/ExperienceEvent';
import { MonsterContract } from '../contracts/MonsterContract';
import { Player } from './Player';

export class Game {
	private _player: Player;
	private _monsters: Array<MonsterContract>;
	private _experienceEvent: ExperienceEvent;

	constructor(player: Player) {
		this._player = player;
		this._monsters = new Array<MonsterContract>();
		this._experienceEvent = new ExperienceEvent();
	}

	public addMonster(...monsters: Array<MonsterContract>): void {
		monsters.forEach((monster) => this._monsters.push(monster));
	}

	public getMonster(guid: number): MonsterContract | undefined {
		return this._monsters.find((monster) => monster.getGUID() === guid);
	}

	public defeatMonster(monsterGuid: number): void {
		const monster = this.getMonster(monsterGuid);
		if (monster === undefined) {
			return;
		}

		this._player.receiveExperience(
			monster.getName(),
			this._experienceEvent.getExperienceBonus(this._player, monster),
		);
	}

	public setExperienceEvent(event: ExperienceEvent): void {
		this._experienceEvent = event;
	}
}
