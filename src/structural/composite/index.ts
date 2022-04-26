import { ProductComposite } from './classes/ProductComposite';
import { ProductLeaf } from './classes/ProductLeaf';

const product1 = new ProductLeaf('Pen', 1);
const product2 = new ProductLeaf('Pencil', 0.5);
const product3 = new ProductLeaf('Eraser', 0.3);
const productBox1 = new ProductComposite();
productBox1.add(product1, product2, product3);
console.log(productBox1.getPrice());

const product4 = new ProductLeaf('Notebook', 10);
const product5 = new ProductLeaf('Book', 20);
const product6 = new ProductLeaf('Schoolbag', 50);
const productBox2 = new ProductComposite();
productBox2.add(product4, product5, product6);
console.log(productBox2.getPrice());

const productBox3 = new ProductComposite();
productBox3.add(productBox1, productBox2);
console.log(productBox3.getPrice());
