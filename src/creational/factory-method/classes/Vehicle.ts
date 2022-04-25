import { Person } from './Person';
import { Utils } from './Utils';

export abstract class Vehicle {
	private _plate: string;
	private _model: string;
	private _color: string;
	private _passengers!: Array<Person>; //Applied dammit operator
	private _limitPassengers: number;

	constructor(
		plate: string,
		model: string,
		color: string,
		limitPassengers: number,
	) {
		this._plate = plate;
		this._model = model;
		this._color = color;
		this._limitPassengers = limitPassengers;
		this.resetPassengers();
	}

	public get plate(): string {
		return this._plate;
	}

	public set plate(plate: string) {
		this._plate = plate;
	}

	public get model(): string {
		return this._model;
	}

	public set model(model: string) {
		this._model = model;
	}

	public get color(): string {
		return this._color;
	}

	public set color(color: string) {
		this._color = color;
	}

	public resetPassengers(): void {
		this._passengers = new Array<Person>();
	}

	public getPassengersNames(): string {
		const passengersNames = new Array<string>();
		this._passengers.forEach((passenger) =>
			passengersNames.push(passenger.name),
		);
		return passengersNames.join(', ');
	}

	public getVehicleLabel(): string {
		return `"${this._model}/${this._color}/${this._plate}"`;
	}

	public pickUp(...passengers: Person[]): void | never {
		if (passengers.length > this._limitPassengers) {
			throw new Error(
				Utils.pretier`${
					passengers.length
				} passengers exceed the passengers limit for ${this.getVehicleLabel()}.`,
			);
		}
		this._passengers = passengers;
		console.log(
			Utils.pretier`A ${this.getVehicleLabel()} is transporting ${
				passengers.length
			} passengers:
			(${this.getPassengersNames()}).`,
		);
	}

	public dropOff(): void {
		this.resetPassengers();
		console.log(
			Utils.pretier`Transport is finish.	${this.getVehicleLabel()} is idle.`,
		);
	}

	public isBusy(): boolean {
		return this._passengers.length > 0;
	}
}
