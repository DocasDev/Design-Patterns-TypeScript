export type UserAddress = {
	street: string;
	number: number;
};

export interface UserContract {
	getAddresses(): Promise<UserAddress[]>;
}
