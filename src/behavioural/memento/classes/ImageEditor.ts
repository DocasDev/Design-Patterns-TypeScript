import { MementoContract } from '../contracts/MementoContract';
import { ImageEditorMemento } from './ImageEditorMemento';

export class ImageEditor {
	private _filePath: string;
	private _fileName!: string;
	private _mimeType!: string;

	constructor(filePath: string) {
		this._filePath = filePath;
		this.calculeImageInfo();
	}

	public get fileName(): string {
		return this._fileName;
	}

	public get filePath(): string {
		return this._filePath;
	}

	public get mimeType(): string {
		return this._mimeType;
	}

	private calculeImageInfo() {
		this._fileName = this._filePath
			.substring(0, this._filePath.lastIndexOf('.'))
			.split('/')
			.slice(-1)
			.join('');
		const fileFormat = this._filePath.substring(
			this._filePath.lastIndexOf('.') + 1,
		);
		this._mimeType = `image/${fileFormat}`;
	}

	public convertFormat(newFormat: string): void {
		this._filePath = `${this.filePath.substring(
			0,
			this._filePath.lastIndexOf('.'),
		)}.${newFormat}`;
		this.calculeImageInfo();
	}

	public save(): Readonly<MementoContract> {
		const date = new Date();

		return new ImageEditorMemento(date.toISOString(), date, this._filePath);
	}

	public restore(memento: MementoContract): void {
		const imageEditorMemento = memento as ImageEditorMemento;
		this._filePath = imageEditorMemento.getFilePath();
		this.calculeImageInfo();
	}
}
