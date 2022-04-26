import { ListNumberSingleton } from './ListNumberSingleton';

const instance1: ListNumberSingleton = ListNumberSingleton.instance;

instance1.appendNumberInList(1);

instance1.appendNumberInList(3);

instance1.appendNumberInList(5);

instance1.appendNumberInList(7);

const instance2: ListNumberSingleton = ListNumberSingleton.instance;

instance2.appendNumberInList(2);

instance2.appendNumberInList(4);

instance2.appendNumberInList(6);

instance2.appendNumberInList(8);

//Ambas as saídas trarão a mesma lista com todos os números de 1 a 8

console.log(instance1.list);

console.log(instance2.list);
