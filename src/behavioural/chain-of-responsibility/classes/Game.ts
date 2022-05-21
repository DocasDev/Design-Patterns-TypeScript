import { MapContract } from "../contracts/MapContract";
import { MapGroupIdValidator } from "./map-teleport-validators/MapGroupIdValidator";
import { MapLevelValidator } from "./map-teleport-validators/MapLevelValidator";
import { MapMaintenanceValidator } from "./map-teleport-validators/MapMaintenanceValidator";
import { Player } from "./Player";

export class Game {
	private _player: Player;
	private _maps: Array<MapContract>;

	constructor(player: Player) {
		this._player = player;
		this._maps = new Array<MapContract>();
	}

	public addMap(...maps: Array<MapContract>): void {
		maps.forEach(map => this._maps.push(map));
	}

	public getMapByName(mapName: string): MapContract | null {
		const map = this._maps.find(map => map.getName() === mapName);
		return map || null;
	}

	public playerTeleport(mapName: string): void {
		const map = this.getMapByName(mapName);
		if (map === null) {
			console.log(`The map "${mapName}" not found!`);
			return;
		}

		const teleportValidator = new MapMaintenanceValidator();
		teleportValidator
			.setNext(new MapGroupIdValidator())
			.setNext(new MapLevelValidator());
		const canTeleport = teleportValidator.validate(this._player, map);
		if (canTeleport) {
			this._player.currentMap = map;
			this._player.position = map.getStartPosition();
			const positionX = this._player.position.positionX;
			const positionY = this._player.position.positionY;
			console.log(`Player teleported to "${map.getName()}"(${positionX},${positionY}).\n---\n`);
		}
	}
}
