import { HamburgerBuilderContract } from '../../contracts/HamburgerBuilderContract';
import { Hamburger } from '../Hamburger';
import {
	Bun,
	Cheddar,
	Cucumber,
	Lettuce,
	Meat,
	Onion,
	SpecialSauce,
	Tomato,
} from '../Ingredients';

export class BigCheddarHamburgerBuilder implements HamburgerBuilderContract {
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
		const cucumber = new Cucumber(0.4, 4);
		this._hamburger.addIngredient(lettuce, cucumber);
		return this;
	}

	public addSauce(): this {
		const specialSauce = new SpecialSauce(2, 1);
		this._hamburger.addIngredient(specialSauce);
		return this;
	}

	public mount(): this {
		const bun = new Bun(1, 2);
		const cheddar = new Cheddar(2, 2);
		const meat = new Meat(10, 2);
		const onion = new Onion(0.3, 6);
		const tomato = new Tomato(0.2, 3);
		this._hamburger.addIngredient(bun, cheddar, meat, onion, tomato);
		return this;
	}

	public getPrice(): number {
		return this._hamburger.getPrice();
	}

	public getHamburger(): Hamburger {
		return this._hamburger;
	}
}
