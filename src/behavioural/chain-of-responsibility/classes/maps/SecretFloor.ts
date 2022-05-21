import { MapContract } from "../../contracts/MapContract";
import { MapPosition } from "../../types/MapPosition";

export class SecretFloor implements MapContract {
	private _inMaintain: boolean;

	constructor() {
		this._inMaintain = false;
	}

	public getName(): string {
		return 'Secret Floor';
	}

	public getGroupIdRestriction(): number {
		//Only players VIP
		return 1;
	}

	public getLevelRestriction(): number {
		return 5;
	}

	public inMaintenance(): boolean {
		return this._inMaintain;
	}

	public setInMaintenance(inMaintenance: boolean): void {
		this._inMaintain = inMaintenance;
	}

	public getStartPosition(): MapPosition {
		return {
			positionX: 10,
			positionY: 50
		}
	}
}
