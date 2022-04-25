import { Person } from './Person';

export class Passengers {
	private _Passengers: Array<Person>;

	constructor() {
		this._Passengers = new Array<Person>();
	}

	public addPassengers(...clients: Array<Person>): void {
		clients.forEach((person) => this._Passengers.push(person));
	}

	public getAmountPassengers(): number {
		return this._Passengers.length;
	}

	public getPassengers(): Array<Person> {
		return this._Passengers;
	}

	public getPassenger(index: number): Person | null {
		return this._Passengers.findIndex(
			(passenger, passengerIndex) => passengerIndex === index,
		) >= 0
			? this._Passengers[index]
			: null;
	}
}
