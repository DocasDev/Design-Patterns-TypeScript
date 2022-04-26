import { IngredientCompositeContract } from '../contracts/IngredientCompositeContract';

export abstract class IngredientAbstract
	implements IngredientCompositeContract
{
	private price: number;
	private amount: number;

	constructor(price: number, amount: number) {
		this.price = price;
		this.amount = amount;
	}

	public getPrice(): number {
		return this.price;
	}

	public getAmount(): number {
		return this.amount;
	}
}
