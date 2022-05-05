export class Player {
	private _name: string;
	private _level: number;
	private _amountExperience: number;
	private _maxExperiencePerLevel: number;

	constructor(name: string) {
		this._name = name;
		this._level = 1;
		this._amountExperience = 0;
		this._maxExperiencePerLevel = 50;
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

	public get maxExperiencePerLevel(): number {
		return this._maxExperiencePerLevel;
	}

	public levelUp(amount: number): void {
		if (amount <= 0) {
			return;
		}

		this._level += amount;
		this._maxExperiencePerLevel += this._level * 20;
		console.log(`The player "${this._name}" level up to ${this._level}.\n`);
	}

	public receiveExperience(amount: number): void {
		const percentAmount = this.calculateExperience(amount).toFixed(2);

		console.log(
			`The player "${this._name}" received ${amount}(${percentAmount}%) experience.\nExperience total: ${this._amountExperience}\n`,
		);
	}

	public calculateExperience(amount: number): number {
		let percent = 0;
		let diffExperience = amount;

		if (amount >= this._maxExperiencePerLevel) {
			diffExperience =
				this._maxExperiencePerLevel - this._amountExperience;
			amount -= diffExperience;
			this._amountExperience = 0;
			this.levelUp(1);
			percent += this.calculateExperience(amount);
		}

		percent += (diffExperience * 100) / this._maxExperiencePerLevel;

		return percent;
	}
}
