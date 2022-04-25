import { Vehicle } from '../Vehicle';

export class Car extends Vehicle {
	constructor(plate: string, model: string, color: string) {
		super(plate, model, color, 4);
	}
}
