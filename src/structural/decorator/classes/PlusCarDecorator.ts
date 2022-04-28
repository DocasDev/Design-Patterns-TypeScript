import { CarDecorator } from './CarDecorator';

export class PlusCarDecorator extends CarDecorator {
	public getName(): string {
		return this._car.getName() + ' Plus';
	}

	public getPrice(): number {
		return this._car.getPrice() + 30;
	}
}
