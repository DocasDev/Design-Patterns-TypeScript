import { MapContract } from "../../contracts/MapContract";
import { MapTeleportValidatorContract } from "../../contracts/MapTeleportValidatorContract";
import { Player } from "../Player";

export class MapLevelValidator extends MapTeleportValidatorContract {
	public validate(player: Player, map: MapContract): boolean {
		if (!player.isGameMaster() && player.level < map.getLevelRestriction()) {
			console.log(`The player "${player.name}" can't teleport to map "${map.getName()}". Level required is ${map.getLevelRestriction()}.\n---\n`);
			return false;
		}

		return super.validate(player, map);
	}
}
