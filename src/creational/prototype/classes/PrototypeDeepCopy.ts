import { Prototype } from '../contracts/PersonPrototypeContract';

export class Person {
	private _name: string;

	constructor(name: string) {
		this._name = name;
	}

	public get name(): string {
		return this._name;
	}
}

export class Driver extends Person implements Prototype {
	private _licenseNumber: string;

	constructor(name: string, licenseNumber: string) {
		super(name);
		this._licenseNumber = licenseNumber;
	}

	public clone(): Driver {
		const clonedDriver = Object.create(
			new Driver(this.name, this._licenseNumber),
		);
		return clonedDriver;
	}
}

export class Car implements Prototype {
	private _plate: string;
	private _model: string;
	private _color: string;
	private _driver: Driver | null;

	constructor(plate: string, model: string, color: string) {
		this._plate = plate;
		this._model = model;
		this._color = color;
		this._driver = null;
	}

	public get plate(): string {
		return this._plate;
	}

	public set plate(plate: string) {
		this._plate = plate;
	}

	public get model(): string {
		return this._model;
	}

	public set model(model: string) {
		this._model = model;
	}

	public get color(): string {
		return this._color;
	}

	public set color(color: string) {
		this._color = color;
	}

	public get driver(): Driver | null {
		return this._driver;
	}

	public attachDriver(driver: Driver): void {
		this._driver = driver;
	}

	public clone(): Car {
		const clonedCar = Object.create(
			new Car(this._plate, this._model, this._color),
		);
		if (this._driver !== null) {
			clonedCar.attachDriver(this._driver.clone());
		}
		return clonedCar;
	}
}
