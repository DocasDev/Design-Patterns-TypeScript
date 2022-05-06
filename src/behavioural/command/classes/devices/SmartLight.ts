export class SmartLight {
	private _name: string;
	private _isOn;
	private _intensity: number;

	constructor(name: string) {
		this._name = name;
		this._isOn = false;
		this._intensity = 50;
	}

	public get name(): string {
		return this._name;
	}

	public get isOn(): boolean {
		return this._isOn;
	}

	public get intensity(): number {
		return this._isOn ? this._intensity : 0;
	}

	public togglePower(): boolean {
		this._isOn = !this._isOn;
		const powerStatus = this._isOn ? 'ON' : 'OFF';
		console.log(`The ${this._name} now is ${powerStatus}\n---`);
		return this._isOn;
	}

	public increaseIntensity(): boolean {
		if (!this._isOn || this._intensity >= 100) {
			console.log(
				`Warning: The ${this._name} is OFF and not received this command.\n---`,
			);
			return false;
		}

		this._intensity++;
		console.log(
			`The ${this._name} intensity has increased to ${this._intensity}\n---`,
		);
		return true;
	}

	public decreaseIntensity(): boolean {
		if (!this._isOn || this._intensity <= 0) {
			console.log(
				`Warning: The ${this._name} is OFF and not received this command.\n---`,
			);
			return false;
		}

		this._intensity--;
		console.log(
			`The ${this._name} intensity has decreased to ${this._intensity}\n---`,
		);
		return true;
	}
}
