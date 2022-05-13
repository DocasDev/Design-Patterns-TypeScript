import { PlayerContract } from "../../contracts/PlayerContract";
import { PlayerStateContract } from "../../contracts/PlayerStateContract";
import { Player } from "../Player";
import { PlayerIdle } from "./PlayerIdle";

export class PlayerDead extends PlayerStateContract{
    constructor(player: PlayerContract){
        super(player, 'Dead');
    }

    public resurect(): void{
        const player = this._player as Player;
        player.currentLife = player.maxLife;
        player.changeState(new PlayerIdle(this._player));
        player.move(0, 0);
        console.log(`The player "${player.name}" resurected.`);
    }
}