import { Person } from './Person';
import { Utils } from './Utils';

export class Passengers {
	private _passengers: Array<Person>;

	constructor() {
		this._passengers = new Array<Person>();
	}

	public addPassengers(...passengers: Array<Person>): void {
		passengers.forEach((person) => this._passengers.push(person));
	}

	public getAmountPassengers(): number {
		return this._passengers.length;
	}

	public getPassengers(): Array<Person> {
		return this._passengers;
	}

	public getPassenger(index: number): Person | null {
		return this._passengers.findIndex(
			(passenger, passengerIndex) => passengerIndex === index,
		) >= 0
			? this._passengers[index]
			: null;
	}

	public getRandomsPassengers(amount: number): Array<Person> {
		const passengers = new Array<Person>();

		if (this._passengers.length === 1) {
			passengers.push(this._passengers[0]);
			return passengers;
		}

		if (amount > this._passengers.length) {
			amount = this._passengers.length;
		}

		for (let j = 0; j < amount; j++) {
			const passenger = this.getPassenger(
				Utils.getRandomNumber(this.getAmountPassengers()),
			);

			if (
				passenger !== null &&
				passengers.findIndex(
					(person) => person.name === passenger.name,
				) >= 0
			) {
				j--;
				continue;
			}

			if (passenger !== null) passengers.push(passenger);
		}

		return passengers;
	}
}
