export class Player {
	private _name: string;
	private _level: number;
	private _amountExperience: number;

	constructor(name: string) {
		this._name = name;
		this._level = 1;
		this._amountExperience = 0;
	}

	public get name(): string {
		return this._name;
	}

	public get level(): number {
		return this._level;
	}

	public get amountExperience(): number {
		return this._amountExperience;
	}

	public set amountExperience(amount: number) {
		if (amount >= 100) {
			const amountLevels = Math.floor(amount / 100);
			this._level += amountLevels;
			amount = amount % 100;
		}
		this._amountExperience = amount;
	}
}
