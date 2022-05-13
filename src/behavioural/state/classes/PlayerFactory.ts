import { PlayerContract } from "../contracts/PlayerContract";
import { Player } from "./Player";

export class PlayerFactory {
	public makePlayer(name: string, strength: number, resistance: number, maxLife: number): PlayerContract {
		return new Player(name, strength, resistance, maxLife);
	}
}
