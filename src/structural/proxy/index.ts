import { UserProxy } from './classes/UserProxy';

async function clientCode(): Promise<void> {
	const user = new UserProxy('John', 'Doe', 'johndoe');
	console.log('\n--- First request delay at 2 seconds. ---\n');
	console.log(await user.getAddresses());
	console.log('\n--- Others requests no delay. ---\n');
	console.log(await user.getAddresses());
}

clientCode();
