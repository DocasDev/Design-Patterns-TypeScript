import { Player } from "../classes/Player";
import { MapContract } from "./MapContract";

export abstract class MapTeleportValidatorContract {
	protected _next: MapTeleportValidatorContract | null;

	constructor() {
		this._next = null;
	}

	public setNext(next: MapTeleportValidatorContract): MapTeleportValidatorContract {
		this._next = next;
		return this._next;
	}

	public validate(player: Player, map: MapContract): boolean {
		if (this._next !== null) {
			return this._next.validate(player, map);
		}
		return true;
	}
}
