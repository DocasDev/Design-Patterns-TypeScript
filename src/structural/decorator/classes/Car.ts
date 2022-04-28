import { CarContract } from '../contracts/CarContract';

export class Car implements CarContract {
	private _price: number;
	private _name: string;

	constructor(name: string) {
		this._price = 10;
		this._name = name;
	}

	public getName(): string {
		return this._name;
	}

	public getPrice(): number {
		return this._price;
	}
}
