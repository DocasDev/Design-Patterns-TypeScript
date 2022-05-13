import { PlayerContract } from "../../contracts/PlayerContract";
import { PlayerStateContract } from "../../contracts/PlayerStateContract";
import { Player } from "../Player";
import { PlayerDead } from "./PlayerDead";

export class PlayerStunned extends PlayerStateContract {
	constructor(player: PlayerContract) {
		super(player, 'Stunned');
	}

	takeDamage(damage: number): void {
		const player = this._player as Player;
		player.currentLife -= damage - player.resistance * 10;
		if (player.currentLife <= 0) {
			player.changeState(new PlayerDead(this._player));
			player.currentLife = 0;
		}
	}
}
