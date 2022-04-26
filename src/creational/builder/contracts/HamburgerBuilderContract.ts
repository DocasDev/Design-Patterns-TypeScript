import { Hamburger } from '../classes/Hamburger';

export interface HamburgerBuilderContract {
	reset(): this;
	mount(): this;
	addSalad(): this;
	addSauce(): this;
	getPrice(): number;
	getHamburger(): Hamburger;
}
