export abstract class ProductComponentContract {
	abstract getPrice(): number;

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	add(product: ProductComponentContract): void {}
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	remove(product: ProductComponentContract): void {}
}
