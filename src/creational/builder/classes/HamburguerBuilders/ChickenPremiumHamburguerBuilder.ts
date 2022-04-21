import { HamburguerBuilderContract } from '../../interfaces/HamburguerBuilderContract';
import { Hamburguer } from '../Hamburguer';
import {
	Chicken,
	Lettuce,
	Mozzarella,
	Onion,
	SpecialSauce,
	Tomato,
	WholeWheatBun,
} from '../Ingredients';

export class ChickenPremiumHamburguerBuilder
	implements HamburguerBuilderContract
{
	private _hamburguer: Hamburguer;

	constructor() {
		this._hamburguer = new Hamburguer();
	}

	public reset(): this {
		this._hamburguer = new Hamburguer();
		return this;
	}

	public addSalad(): this {
		const lettuce = new Lettuce(0.5, 2);
		this._hamburguer.addIngredient(lettuce);
		return this;
	}

	public addSauce(): this {
		const specialSauce = new SpecialSauce(2, 1);
		this._hamburguer.addIngredient(specialSauce);
		return this;
	}

	public mount(): this {
		const wholeWheatBun = new WholeWheatBun(1, 2);
		const mozzarella = new Mozzarella(2, 2);
		const chicken = new Chicken(8, 2);
		const onion = new Onion(0.3, 6);
		const tomato = new Tomato(0.2, 3);
		this._hamburguer.addIngredient(
			wholeWheatBun,
			mozzarella,
			chicken,
			onion,
			tomato,
		);
		return this;
	}

	public getPrice(): number {
		return this._hamburguer.getPrice();
	}

	public getHamburguer(): Hamburguer {
		return this._hamburguer;
	}
}
