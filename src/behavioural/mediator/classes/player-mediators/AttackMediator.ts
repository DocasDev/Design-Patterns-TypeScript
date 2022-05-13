import { PlayerContract } from "../../contracts/PlayerContract";
import { PlayerMediator } from "../../contracts/PlayerMediator";

export class AttackMediator implements PlayerMediator{
    private _player: PlayerContract | null;

    constructor(){
        this._player = null;
    }

    public setPlayer(player: PlayerContract): void{
        this._player = player;
    }
    
    calculateDamage(target: PlayerContract): void {
        if(this._player === null){
            return;
        }
        const playerDamage = this._player.getDamage();
        const targetDefense = target.getDefense();
        const maxDamage = playerDamage - targetDefense;
        const damage = Math.floor(maxDamage * 0.1) + Math.floor(Math.random() * maxDamage);

        target.takeDamage(damage);
    }
}