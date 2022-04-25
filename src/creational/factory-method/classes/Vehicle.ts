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
		this._passengers = new Array<Person>(this._limitPassengers);
	}

	public pickUp(...passengers: Person[]): void | never {
		if (passengers.length > this._limitPassengers) {
			throw new Error('Passenger limit exceeded');
		}
		this._passengers = passengers;
		console.log(
			`A ${this._color} ${this._model} with ${
				this._plate
			} license plate is transporting passengers:
			(${this._passengers.join(', ')}).`,
		);

		setTimeout(() => {
			this.dropOff();
		}, Utils.getRandomNumber(2000) + 1000);
	}

	private dropOff(): void {
		this.resetPassengers();
		console.log(
			`Transport is finish.
			${this._color} ${this._model} with ${this._plate} license plate is idle.`,
		);
	}

	public isBusy(): boolean {
		return this._passengers.length > 0;
	}
}
