import { MementoContract } from '../contracts/MementoContract';
import { ImageEditor } from './ImageEditor';

export class ImageEditorBackupManager {
	private readonly _imageEditor: ImageEditor;
	private _mementos: Array<MementoContract>;

	constructor(imageEditor: ImageEditor) {
		this._imageEditor = imageEditor;
		this._mementos = Array<MementoContract>();
	}

	public backup(): void {
		this._mementos.push(this._imageEditor.save());
		console.log(`\nBackup: ImageEditor state saved.\n---`);
	}

	public undo(): void {
		const memento = this._mementos.pop();

		if (!memento) {
			console.log('\nBackup not found.\n---');
			return;
		}

		this._imageEditor.restore(memento);
		console.log(`\nBackup: ${memento.getName()} has restored.\n---`);
	}

	public showMementos(): void {
		this._mementos.forEach((memento) => console.log(memento));
	}
}
