import { ArmorContract } from '../contracts/ArmorContract';
import { WeaponContract } from '../contracts/WeaponContract';

export abstract class Character {
	private _level: number;
	private _maxLife!: number;
	private _currentLife!: number;
	private _attack: number;
	private _dexterity: number;
	private _resistance: number;
	private _weapon: WeaponContract | null;
	private _armor: ArmorContract | null;

	constructor(attack: number, dexterity: number, resistance: number) {
		this._level = 1;
		this._attack = attack;
		this._dexterity = dexterity;
		this._resistance = resistance;
		this._weapon = null;
		this._armor = null;
		this.updateAttributes();
	}

	public get maxLife(): number {
		return this._maxLife;
	}

	public set maxLife(amount: number) {
		if (amount < 0) {
			this._maxLife = 0;
			return;
		}

		this._maxLife = Math.floor(amount);
	}

	public get currentLife(): number {
		return this._currentLife;
	}

	public set currentLife(amount: number) {
		if (amount < 0) {
			this._currentLife = 0;
			return;
		}

		this._currentLife = Math.floor(amount);
	}

	public get attack(): number {
		return this._attack;
	}

	public get dexterity(): number {
		return this._dexterity;
	}

	public get resistance(): number {
		return this._resistance;
	}

	private updateAttributes(): void {
		//Life
		this._maxLife =
			1000 + (this._armor !== null ? this._armor.getLifeBonus() : 0);
		if (
			this._currentLife === undefined ||
			this._currentLife > this._maxLife
		)
			this._currentLife = this._maxLife;
		//Attack
		this._attack =
			this._weapon !== null ? this._weapon.getAttackBonus() : 0;
		this._attack += this._level * 0.01;
		//Dexterity
		this._dexterity =
			this._weapon !== null ? this._weapon.getDexterityBonus() : 0;
		this._dexterity += this._level * 0.02;
		//resistance
		this._resistance =
			this._armor !== null ? this._armor.getResistanceBonus() : 0;
		this._resistance += this._level * 0.01;
	}

	public levelUp(amount: number): void {
		this._level += amount;
		this.updateAttributes();
	}

	public attachWeapon(weapon: WeaponContract): void {
		this._weapon = weapon;
		this.updateAttributes();
	}

	public detachWeapon(): void {
		this._weapon = null;
		this.updateAttributes();
	}

	public attachArmor(armor: ArmorContract): void {
		this._armor = armor;
		this.updateAttributes();
	}

	public detachArmor(): void {
		this._armor = null;
		this.updateAttributes();
	}
}
