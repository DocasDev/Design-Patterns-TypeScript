import { HamburguerBuilderContract } from '../../interfaces/HamburguerBuilderContract';
import { Hamburguer } from '../Hamburguer';
import {
	Bun,
	Cheddar,
	Cucumber,
	Egg,
	Ketchup,
	Lettuce,
	Meat,
	Mozzarella,
	Mustard,
	Onion,
	Tomato,
} from '../Ingredients';

export class ScoobyDooHamburguerBuilder implements HamburguerBuilderContract {
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
		const cucumber = new Cucumber(0.4, 4);
		this._hamburguer.addIngredient(lettuce, cucumber);
		return this;
	}

	public addSauce(): this {
		const ketchup = new Ketchup(0.5, 1);
		const mustard = new Mustard(0.5, 1);
		this._hamburguer.addIngredient(ketchup, mustard);
		return this;
	}

	public mount(): this {
		const bun = new Bun(1, 2);
		const cheddar = new Cheddar(2, 2);
		const mozzarella = new Mozzarella(2, 2);
		const meat = new Meat(10, 2);
		const egg = new Egg(2, 3);
		const onion = new Onion(0.3, 6);
		const tomato = new Tomato(0.2, 3);
		this._hamburguer.addIngredient(
			bun,
			cheddar,
			mozzarella,
			meat,
			egg,
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
