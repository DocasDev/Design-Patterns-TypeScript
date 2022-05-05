import { MonsterContract } from '../contracts/MonsterContract';

export class Monster implements MonsterContract {
	private _guid: number;
	private _id: number;
	private _name: string;
	private _amountExperience: number;
	private _level: number;

	constructor(
		guid: number,
		id: number,
		name: string,
		amountExperience: number,
		level: number,
	) {
		this._guid = guid;
		this._id = id;
		this._name = name;
		this._amountExperience = amountExperience;
		this._level = level;
	}

	public getGUID(): number {
		return this._guid;
	}
	public getId(): number {
		return this._id;
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
