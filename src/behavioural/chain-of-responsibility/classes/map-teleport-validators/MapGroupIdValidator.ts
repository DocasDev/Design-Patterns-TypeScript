import { MapContract } from "../../contracts/MapContract";
import { MapTeleportValidatorContract } from "../../contracts/MapTeleportValidatorContract";
import { Player } from "../Player";

export class MapGroupIdValidator extends MapTeleportValidatorContract {
	public validate(player: Player, map: MapContract): boolean {
		if (!player.isGameMaster() && player.groupId < map.getGroupIdRestriction()) {
			console.log(`The player "${player.name}" can't teleport to map "${map.getName()}". Only VIP Players are allowed.\n---\n`);
			return false;
		}

		return super.validate(player, map);
	}
}
