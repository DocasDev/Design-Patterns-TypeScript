export class Singleton {
	private static _instance: Singleton | null = null;
	private _list: Array<number>;

	private constructor() {
		this._list = [];
	}

	static get instance(): Singleton {
		if (Singleton._instance === null) {
			Singleton._instance = new Singleton();
		}

		return Singleton._instance;
	}

	public get list(): Array<number> {
		return this._list;
	}

	public appendNumberInList(num: number): void {
		this._list.push(num);
	}
}
