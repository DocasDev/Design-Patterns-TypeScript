import { DeviceContract } from '../../contracts/DeviceContract';
import { LightDeviceContract } from '../../contracts/LightDeviceContract';

export class Light implements DeviceContract, LightDeviceContract {
	protected _name: string;
	protected _make: string;
	protected _model: string;
	protected _powerStatus: boolean;
	protected _brightness: number;

	constructor(name: string, make: string, model: string) {
		this._name = name;
		this._make = make;
		this._model = model;
		this._powerStatus = false;
		this._brightness = 0;
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

	public getBrightness(): number {
		return this._brightness;
	}
	public setBrightness(brightness: number): void {
		this._brightness = brightness;
	}
}
