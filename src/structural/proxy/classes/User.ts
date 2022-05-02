import { UserAddress, UserContract } from '../contracts/UserContract';

export class User implements UserContract {
	private _firstName: string;
	private _lastName: string;
	private _userName: string;

	constructor(firstName: string, lastName: string, userName: string) {
		this._firstName = firstName;
		this._lastName = lastName;
		this._userName = userName;
	}

	public get firstName(): string {
		return this._firstName;
	}

	public set firstName(firstName: string) {
		this._firstName = firstName;
	}

	public get lastName(): string {
		return this._lastName;
	}

	public set lastName(lastName: string) {
		this._lastName = lastName;
	}

	public get userName(): string {
		return this._userName;
	}

	public set userName(userName: string) {
		this._userName = userName;
	}

	public async getAddresses(): Promise<UserAddress[]> {
		return new Promise<UserAddress[]>((resolve) => {
			//DB request simulation with network delay
			return setTimeout(() => {
				return resolve([
					{ street: '2 West Street', number: 1433 },
					{ street: '65 Green Lane', number: 2058 },
				]);
			}, 2000);
		});
	}
}
