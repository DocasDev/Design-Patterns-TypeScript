import { CarDecorator } from './CarDecorator';

export class PrimeCarDecorator extends CarDecorator {
	public getName(): string {
		return this._car.getName() + ' Prime';
	}

	public getPrice(): number {
		return this._car.getPrice() + 50;
	}
}
