import isEmail from 'validator/lib/isEmail';
import equals from 'validator/lib/equals';
import isNumeric from 'validator/lib/isNumeric';
import { ValidatorContract } from '../contracts/ValidatorContract';

export class ValidatorAdapter implements ValidatorContract {
	public isEmail(value: string, options?: Record<string, unknown>): boolean {
		return isEmail(value, options);
	}

	public equals(str: string, comparison: string): boolean {
		return equals(str, comparison);
	}

	public isNumeric(str: string, options?: Record<string, unknown>): boolean {
		return isNumeric(str, options);
	}
}
