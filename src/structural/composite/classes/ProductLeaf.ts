import { ProductComponentContract } from '../contracts/ProductComponentContract';

export class ProductLeaf extends ProductComponentContract {
	private _name: string;
	private _price: number;

	constructor(name: string, price: number) {
		super();
		this._name = name;
		this._price = price;
	}

	public get price(): number {
		return this._price;
	}

	public get name(): string {
		return this._name;
	}

	public getPrice(): number {
		return this.price;
	}
}
