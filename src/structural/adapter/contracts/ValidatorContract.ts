export interface ValidatorContract {
	isEmail(value: string, options?: Record<string, unknown>): boolean;
	equals(str: string, comparison: string): boolean;
	isNumeric(str: string | number, options?: Record<string, unknown>): boolean;
}
