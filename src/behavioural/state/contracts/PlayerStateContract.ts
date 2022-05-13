import { PlayerContract } from "./PlayerContract";

export abstract class PlayerStateContract{
    protected _player: PlayerContract;
    protected _name: string;

    constructor(player: PlayerContract, name: string){
        this._player = player;
        this._name = name;
    }

    public get name(): string{
        return this._name;
    }
    
    public takeDamage(damage: number): void{}
    public doAttack(enemy: PlayerContract): void{}
    public move(positionX: number, positionY: number): void{}
    public resurect(): void{}
}