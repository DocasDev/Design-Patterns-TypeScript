import { PlayerContract } from "../contracts/PlayerContract";
import { PlayerStateContract } from "../contracts/PlayerStateContract";
import { PlayerIdle } from "./player-states/PlayerIdle";

export class Player implements PlayerContract{
    private _name: string;
    private _strength: number;
    private _resistence: number;
    private _maxLife: number;
    private _currentLife: number;
    private _positionX: number;
    private _positionY: number;
    private _state: PlayerStateContract;

    constructor(name: string, strength: number, resistence: number, maxLife: number){
        this._name = name;
        this._strength = strength;
        this._resistence = resistence;
        this._maxLife = maxLife;
        this._currentLife = this._maxLife;
        this._positionX = 0;
        this._positionY = 0;
        this._state = new PlayerIdle(this);
    }

    public get name(): string{
        return this._name;
    }

    public set name(name: string){
        this._name = name;
    }

    public get strength(): number{
        return this._strength;
    }

    public set strength(strength: number){
        this._strength = strength;
    }

    public get resistence(): number{
        return this._resistence;
    }

    public set resistence(resistence: number){
        this._resistence = resistence;
    }

    public get maxLife(): number{
        return this._maxLife;
    }

    public set maxLife(maxLife: number){
        this._maxLife = maxLife;
    }

    public get currentLife(): number{
        return this._currentLife;
    }

    public set currentLife(currentLife: number){
        this._currentLife = currentLife;
    }

    public get positionX(): number{
        return this._positionX;
    }

    public set positionX(position: number){
        this._positionX = position;
    }

    public get positionY(): number{
        return this._positionY;
    }

    public set positionY(position: number){
        this._positionY = position;
    }

    public takeDamage(damage: number): void{
        this._state.takeDamage(damage);
    }

    public doAttack(enemy: PlayerContract): void{
        this._state.doAttack(enemy);
    }

    public move(positionX: number, positionY: number): void{
        this._state.move(positionX, positionY);
    }

    public changeState(newState: PlayerStateContract): void{
        this._state = newState;
        console.log(`The player ${this._name} is now ${this._state.name}`);
    }
}