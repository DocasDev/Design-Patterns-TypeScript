import { IngredientCompositeContract } from '../interfaces/IngredientCompositeContract';

export class Hamburguer implements IngredientCompositeContract {
	private readonly _ingredients: IngredientCompositeContract[];

	constructor() {
		this._ingredients = [];
	}

	public getPrice(): number {
		const price = this._ingredients.reduce((sum, ingredient) => {
			return sum + ingredient.getAmount() * ingredient.getPrice();
		}, 0);
		return parseFloat(price.toFixed(2));
	}

	public getAmount(): number {
		return this._ingredients.length;
	}

	public addIngredient(...ingredients: IngredientCompositeContract[]): void {
		ingredients.forEach((ingredient) => this._ingredients.push(ingredient));
	}
}
