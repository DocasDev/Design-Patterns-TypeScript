import { ProductComponentContract } from '../contracts/ProductComponentContract';

export class ProductComposite extends ProductComponentContract {
	private _children: Array<ProductComponentContract>;

	constructor() {
		super();
		this._children = new Array<ProductComponentContract>();
	}

	public getPrice(): number {
		return this._children.reduce(
			(sum, children) => sum + children.getPrice(),
			0,
		);
	}

	public add(...products: Array<ProductComponentContract>): void {
		products.forEach((product) => this._children.push(product));
	}

	public remove(product: ProductComponentContract): void {
		const productIndex = this._children.indexOf(product);
		if (productIndex >= 0) this._children.splice(productIndex, 1);
	}
}
