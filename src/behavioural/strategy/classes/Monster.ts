import { MonsterContract } from '../contracts/MonsterContract';

export class Monster implements MonsterContract {
	private _name: string;
	private _amountExperience: number;
	private _level: number;

	constructor(name: string, amountExperience: number, level: number) {
		this._name = name;
		this._amountExperience = amountExperience;
		this._level = level;
	}

	public getName(): string {
		return this._name;
	}

	public getAmountExperience(): number {
		return this._amountExperience;
	}

	public getLevel(): number {
		return this._level;
	}
}
