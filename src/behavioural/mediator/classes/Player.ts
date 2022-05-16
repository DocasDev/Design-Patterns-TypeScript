import { PlayerContract } from "../contracts/PlayerContract";
import { PlayerMediator } from "../contracts/PlayerMediator";

export type PlayerData = {
    guid: string; 
    name: string;
    strength: number;
    dexterity: number;
    resistance: number;
    maxLife: number;
}

export class Player implements PlayerContract {
	private _guid: string;
	private _name: string;
	private _strength: number;
	private _dexterity: number;
	private _resistance: number;
	private _maxLife: number;
	private _currentLife: number;
    private _attackMediator!: PlayerMediator;

	constructor(playerData: PlayerData, attackMediator: PlayerMediator) {
        this._guid = playerData.guid;        
		this._name = playerData.name;
		this._strength = playerData.strength;
        this._dexterity = playerData.dexterity;
		this._resistance = playerData.resistance;
		this._maxLife = playerData.maxLife;
		this._currentLife = this._maxLife;
        this.attachAttackMediator(attackMediator);
	}

    public attachAttackMediator(mediator: PlayerMediator): void{
        this._attackMediator = mediator;
        mediator.setPlayer(this);
    }

    public getAttackMediator(): PlayerMediator{
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