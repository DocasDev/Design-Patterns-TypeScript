import { SoundDeviceContract } from '../../contracts/SoundDeviceContract';

export class Radio implements SoundDeviceContract {
	protected _name: string;
	protected _make: string;
	protected _model: string;
	protected _powerStatus: boolean;
	protected _volume: number;

	constructor(name: string, make: string, model: string) {
		this._name = name;
		this._make = make;
		this._model = model;
		this._powerStatus = false;
		this._volume = 0;
	}

	public getName(): string {
		return this._name;
	}

	public setName(name: string): void {
		this._name = name;
	}

	public getMake(): string {
		return this._make;
	}

	public setMake(make: string): void {
		this._make = make;
	}

	public getModel(): string {
		return this._model;
	}

	public setModel(model: string): void {
		this._model = model;
	}

	public setPower(status: boolean): void {
		this._powerStatus = status;
	}
	public getPower(): boolean {
		return this._powerStatus;
	}

	public getVolume(): number {
		return this._volume;
	}
	public setVolume(volume: number): void {
		this._volume = volume;
	}
}
