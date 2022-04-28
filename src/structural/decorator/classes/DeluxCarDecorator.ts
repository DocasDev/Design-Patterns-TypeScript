import { CarDecorator } from './CarDecorator';

export class DeluxCarDecorator extends CarDecorator {
	public getName(): string {
		return this._car.getName() + ' Delux';
	}

	public getPrice(): number {
		return this._car.getPrice() + 20;
	}
}
