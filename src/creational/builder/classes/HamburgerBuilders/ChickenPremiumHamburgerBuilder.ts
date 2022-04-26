import { HamburgerBuilderContract } from '../../contracts/HamburgerBuilderContract';
import { Hamburger } from '../Hamburger';
import {
	Chicken,
	Lettuce,
	Mozzarella,
	Onion,
	SpecialSauce,
	Tomato,
	WholeWheatBun,
} from '../Ingredients';

export class ChickenPremiumHamburgerBuilder
	implements HamburgerBuilderContract
{
	private _hamburger: Hamburger;

	constructor() {
		this._hamburger = new Hamburger();
	}

	public reset(): this {
		this._hamburger = new Hamburger();
		return this;
	}

	public addSalad(): this {
		const lettuce = new Lettuce(0.5, 2);
		this._hamburger.addIngredient(lettuce);
		return this;
	}

	public addSauce(): this {
		const specialSauce = new SpecialSauce(2, 1);
		this._hamburger.addIngredient(specialSauce);
		return this;
	}

	public mount(): this {
		const wholeWheatBun = new WholeWheatBun(1, 2);
		const mozzarella = new Mozzarella(2, 2);
		const chicken = new Chicken(8, 2);
		const onion = new Onion(0.3, 6);
		const tomato = new Tomato(0.2, 3);
		this._hamburger.addIngredient(
			wholeWheatBun,
			mozzarella,
			chicken,
			onion,
			tomato,
		);
		return this;
	}

	public getPrice(): number {
		return this._hamburger.getPrice();
	}

	public getHamburger(): Hamburger {
		return this._hamburger;
	}
}
