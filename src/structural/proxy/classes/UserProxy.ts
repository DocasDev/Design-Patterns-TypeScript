import { UserAddress, UserContract } from '../contracts/UserContract';
import { User } from './User';

export class UserProxy implements UserContract {
	private _firstName: string;
	private _lastName: string;
	private _userName: string;
	private _realUser: UserContract | null;
	private _usersAddress: UserAddress[] | null;

	constructor(firstName: string, lastName: string, userName: string) {
		this._firstName = firstName;
		this._lastName = lastName;
		this._userName = userName;
		this._realUser = null;
		this._usersAddress = null;
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

	public getUser(): UserContract {
		if (this._realUser === null) {
			this._realUser = new User(
				this._firstName,
				this._lastName,
				this._userName,
			);
		}

		return this._realUser;
	}

	public async getAddresses(): Promise<UserAddress[]> {
		this._realUser = this.getUser();

		if (this._usersAddress === null) {
			this._usersAddress = await this._realUser.getAddresses();
		}

		return this._usersAddress;
	}
}
