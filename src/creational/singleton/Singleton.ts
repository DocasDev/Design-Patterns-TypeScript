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

const instance1: Singleton = Singleton.instance;
instance1.appendNumberInList(1);
instance1.appendNumberInList(3);
instance1.appendNumberInList(5);
instance1.appendNumberInList(7);

const instance2: Singleton = Singleton.instance;
instance2.appendNumberInList(2);
instance2.appendNumberInList(4);
instance2.appendNumberInList(6);
instance2.appendNumberInList(8);

//Ambas as saídas trarão a mesma lista com todos os números de 1 a 8
console.log(instance1.list);
console.log(instance2.list);
