import { MementoContract } from '../contracts/MementoContract';

export class ImageEditorMemento implements MementoContract {
	private _name: string;
	private _date: Date;
	private _filePath: string;

	constructor(name: string, date: Date, filePath: string) {
		this._name = name;
		this._date = date;
		this._filePath = filePath;
	}

	public getName(): string {
		return this._name;
	}

	public getDate(): Date {
		return this._date;
	}

	public getFilePath(): string {
		return this._filePath;
	}
}
