import { MonsterFlyweight } from '../classes/MonsterFlyweight';

export type MonsterFlyweightData = {
	readonly id: number;
	readonly sprite: string;
	readonly name: string;
	readonly monsterClass: string;
	readonly strength: number;
	readonly resistence: number;
};

export type MonsterFlyweightDictionary = {
	[key: string]: MonsterFlyweight;
};
