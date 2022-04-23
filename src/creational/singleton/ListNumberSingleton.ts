export class ListNumberSingleton {
	private static _instance: ListNumberSingleton | null = null;
	private _list: Array<number>;

	private constructor() {
		this._list = [];
	}

	static get instance(): ListNumberSingleton {
		if (ListNumberSingleton._instance === null) {
			ListNumberSingleton._instance = new ListNumberSingleton();
		}

		return ListNumberSingleton._instance;
	}

	public get list(): Array<number> {
		return this._list;
	}

	public appendNumberInList(num: number): void {
		this._list.push(num);
	}
}
