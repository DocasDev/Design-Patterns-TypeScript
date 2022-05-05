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
		console.log(
			`---\nThe player "${this._name}" level up to ${this._level}.\n---`,
		);
	}

	public receiveExperience(monsterName: string, amount: number): void {
		const percentAmount = this.calculateExperience(amount).toFixed(2);

		console.log(
			`---\nThe player "${this._name}" defeated a "${monsterName}"\nand received ${amount}(${percentAmount}%) experience.\n---\n`,
		);
	}

	private calculateExperience(amount: number): number {
		const amountExperienceToNextLevel =
			this._maxExperiencePerLevel - this._amountExperience;
		let percent = (amount * 100) / this._maxExperiencePerLevel;

		if (amount >= amountExperienceToNextLevel) {
			amount -= amountExperienceToNextLevel;
			this._amountExperience = 0;
			percent =
				(amountExperienceToNextLevel * 100) /
				this._maxExperiencePerLevel;
			this.levelUp(1);
			return percent + this.calculateExperience(amount);
		}

		this._amountExperience += amount;
		return percent;
	}
}
