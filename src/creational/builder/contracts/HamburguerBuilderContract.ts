import { Hamburguer } from '../classes/Hamburguer';

export interface HamburguerBuilderContract {
	reset(): this;
	mount(): this;
	addSalad(): this;
	addSauce(): this;
	getPrice(): number;
	getHamburguer(): Hamburguer;
}
