import { PlayerContract } from "../../contracts/PlayerContract";
import { PlayerStateContract } from "../../contracts/PlayerStateContract";
import { Player } from "../Player";
import { PlayerDead } from "./PlayerDead";

export class PlayerStuned extends PlayerStateContract{
    constructor(player: PlayerContract){
        super(player, 'Stuned');
    }

    takeDamage(damage: number): void {
        const player = this._player as Player;
        player.currentLife -= damage - player.resistence * 10;
        if(player.currentLife <= 0){
            player.changeState(new PlayerDead(this._player));
            player.currentLife = 0;
        }
    }
}