import { CarContract } from '../contracts/CarContract';

export class CarDecorator implements CarContract {
	protected _car: CarContract;

	constructor(car: CarContract) {
		this._car = car;
	}

	public getName(): string {
		return this._car.getName();
	}

	public getPrice(): number {
		return this._car.getPrice();
	}
}
