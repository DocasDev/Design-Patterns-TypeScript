import { MapContract } from "../contracts/MapContract";
import { MapPosition } from "../types/MapPosition";

export type PlayerData = {
	name: string;
	level: number;
	groupId: number;
	position: MapPosition;
}

export class Player {
	private _name: string;
	private _level: number;
	private _groupId: number;
	private _position: MapPosition;
	private _currentMap: MapContract;

	constructor(playerData: PlayerData, map: MapContract) {
		this._name = playerData.name;
		this._level = playerData.level;
		this._groupId = playerData.groupId;
		this._position = playerData.position;
		this._currentMap = map;
	}

	public get name(): string {
		return this._name;
	}

	public get level(): number {
		return this._level;
	}

	public get groupId(): number {
		return this._groupId;
	}

	public set groupId(groupId: number) {
		this._groupId = groupId;
	}

	public get position(): MapPosition {
		return this._position;
	}

	public set position(position: MapPosition) {
		this._position = position;
	}

	public get currentMap(): MapContract {
		return this._currentMap;
	}

	public set currentMap(map: MapContract) {
		this._currentMap = map;
	}

	public isGameMaster(): boolean {
		return this._groupId === 99;
	}

	public levelUp(amount: number): void {
		this._level += amount;
		console.log(`Player "${this._name}" level up to "${this._level}".\n---\n`);
	}
}
