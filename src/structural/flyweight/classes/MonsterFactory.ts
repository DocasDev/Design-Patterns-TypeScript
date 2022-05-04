import { MonsterFlyweightContract } from '../contracts/MonsterFlyweightContract';
import {
	MonsterFlyweightData,
	MonsterFlyweightDictionary,
} from '../types/MonsterTypes';
import { MonsterFlyweight } from './MonsterFlyweight';

export class MonsterFactory {
	private _monsters: MonsterFlyweightDictionary;

	constructor() {
		this._monsters = {};
	}

	private createDictionaryKey(data: MonsterFlyweightData): string {
		const { monsterClass, sprite, id } = data;
		return Object.values({ id, monsterClass, sprite })
			.map((item) =>
				item.toString().replace(/\W/, '').toLocaleLowerCase(),
			)
			.join('_');
	}

	public makeMonster(
		instrinsicState: MonsterFlyweightData,
	): MonsterFlyweightContract {
		const key = this.createDictionaryKey(instrinsicState);
		if (!(key in this._monsters)) {
			this._monsters[key] = new MonsterFlyweight(instrinsicState);
		}
		return this._monsters[key];
	}

	public getMonsters(): MonsterFlyweightDictionary {
		return this._monsters;
	}
}
