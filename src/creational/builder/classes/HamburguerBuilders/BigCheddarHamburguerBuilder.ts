import { HamburguerBuilderContract } from '../../interfaces/HamburguerBuilderContract';
import { Hamburguer } from '../Hamburguer';
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

export class BigCheddarHamburguerBuilder implements HamburguerBuilderContract {
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
		const specialSauce = new SpecialSauce(2, 1);
		this._hamburguer.addIngredient(specialSauce);
		return this;
	}

	public mount(): this {
		const bun = new Bun(1, 2);
		const cheddar = new Cheddar(2, 2);
		const meat = new Meat(10, 2);
		const onion = new Onion(0.3, 6);
		const tomato = new Tomato(0.2, 3);
		this._hamburguer.addIngredient(bun, cheddar, meat, onion, tomato);
		return this;
	}

	public getPrice(): number {
		return this._hamburguer.getPrice();
	}

	public getHamburguer(): Hamburguer {
		return this._hamburguer;
	}
}
