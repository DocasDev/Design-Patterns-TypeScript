import { MapContract } from "../../contracts/MapContract";
import { MapTeleportValidatorContract } from "../../contracts/MapTeleportValidatorContract";
import { Player } from "../Player";

export class MapMaintenanceValidator extends MapTeleportValidatorContract {
	public validate(player: Player, map: MapContract): boolean {
		if (!player.isGameMaster() && map.inMaintenance()) {
			console.log(`The player "${player.name}" can't teleport to map "${map.getName()}". Map in maintenance.\n---\n`);
			return false;
		}

		return super.validate(player, map);
	}
}
