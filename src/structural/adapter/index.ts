import { ValidatorAdapter } from './classes/ValidatorAdapter';

const validator = new ValidatorAdapter();
const email = 'johndoe@mail.com';
const email2 = 'johndoe@mail.io';
const number = '1234';
const number2 = '1234a';

if (validator.isEmail(email)) {
	console.log(`The e-mail address "${email}" is valid.`);
} else {
	console.log(`The e-mail address "${email}" is invalid.`);
}

if (validator.equals(email, email2)) {
	console.log(`The e-mail addresses "${email}" and "${email2}" are equals.`);
} else {
	console.log(
		`The e-mail addresses "${email}" and "${email2}" are not equals.`,
	);
}

if (validator.isNumeric(number)) {
	console.log(`"${number}" is a number`);
} else {
	console.log(`"${number}" is not a number`);
}

if (validator.isNumeric(number2)) {
	console.log(`"${number2}" is a number`);
} else {
	console.log(`"${number2}" is not a number`);
}
