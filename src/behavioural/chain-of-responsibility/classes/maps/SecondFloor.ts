import { MapContract } from "../../contracts/MapContract";
import { MapPosition } from "../../types/MapPosition";

export class SecondFloor implements MapContract {
	private _inMaintain: boolean;

	constructor() {
		this._inMaintain = false;
	}

	public getName(): string {
		return 'Second Floor';
	}

	public getGroupIdRestriction(): number {
		return 0;
	}

	public getLevelRestriction(): number {
		return 20;
	}

	public inMaintenance(): boolean {
		return this._inMaintain;
	}

	public setInMaintenance(inMaintenance: boolean): void {
		this._inMaintain = inMaintenance;
	}

	public getStartPosition(): MapPosition {
		return {
			positionX: 150,
			positionY: 120
		}
	}
}
