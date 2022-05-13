import { PlayerContract } from "../../contracts/PlayerContract";
import { PlayerStateContract } from "../../contracts/PlayerStateContract";
import { Player } from "../Player";
import { PlayerDead } from "./PlayerDead";
import { PlayerStunned } from "./PlayerStunned";

export class PlayerIdle extends PlayerStateContract {
	constructor(player: PlayerContract) {
		super(player, 'Idle');
	}

	takeDamage(damage: number): void {
		const player = this._player as Player;
		player.currentLife -= damage - player.resistance * 20;
		console.log(`The player "${player.name}" received "${damage}" damage.\n---\n`);
		if (player.currentLife <= 0) {
			player.changeState(new PlayerDead(this._player));
			player.currentLife = 0;
			return;
		}

		const stun = Math.floor(Math.random() * 3) === 1 ? true : false;
		if (stun) {
			player.changeState(new PlayerStunned(player));
		}
	}

	doAttack(enemy: PlayerContract): void {
		const player = this._player as Player;
		enemy.takeDamage(player.strength * 10);
	}

	move(positionX: number, positionY: number): void {
		const player = this._player as Player;
		player.positionX = positionX;
		player.positionY = positionY;
		console.log(`The player "${player.name}" has moved to (${positionX}, ${positionY}).\n---\n`);
	}
}
