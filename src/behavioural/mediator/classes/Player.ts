import { PlayerContract } from "../contracts/PlayerContract";
import { PlayerMediator } from "../contracts/PlayerMediator";

export class Player implements PlayerContract {
	private _guid: string;
	private _name: string;
	private _strength: number;
	private _dexterity: number;
	private _resistance: number;
	private _maxLife: number;
	private _currentLife: number;
    private _attackMediator: PlayerMediator | null;

	constructor(guid: string, name: string, strength: number, dexterity: number, resistance: number, maxLife: number) {
        this._guid = guid;        
		this._name = name;
		this._strength = strength;
        this._dexterity = dexterity;
		this._resistance = resistance;
		this._maxLife = maxLife;
		this._currentLife = this._maxLife;
        this._attackMediator = null;
	}

    public attachAttackMediator(mediator: PlayerMediator): void{
        this._attackMediator = mediator;
        mediator.setPlayer(this);
    }

    public getAttackMediator(): PlayerMediator | null{
        return this._attackMediator;
    }

    public getName(): string{
        return this._name;
    }

    public getGuid(): string{
        return this._guid;
    }

    public getDamage(): number{
        return this._strength * 10 + this._dexterity * 5;
    }

    public getDefense(): number{
        return this._resistance
    }

    public takeDamage(damage: number): void{
        if(this._currentLife === 0){
            return;
        }

        this._currentLife -= damage;
        console.log(`The player "${this.getName()}" receive "${damage}" damage.\n---\n`);

        if(this._currentLife < 0){
            this._currentLife = 0;
            console.log(`The player "${this.getName()}" is dead.\n---\n`);
        }

    }

    public receiveHealing(healing: number): void{
        if(this._currentLife === this._maxLife){
            return;
        }

        this._currentLife += healing;
        if(this._currentLife > this._maxLife){
            this._currentLife = this._maxLife;
        }
        console.log(`The player "${this.getName()}" receive "${healing}" healing.\n---\n`);
    }

    public isDead(): boolean{
        return this._currentLife === 0 ? true : false;
    }
}