import { MapPosition } from "../types/MapPosition";

export interface MapContract {
	getName(): string;
	getLevelRestriction(): number;
	getGroupIdRestriction(): number;
	inMaintenance(): boolean;
	setInMaintenance(inMaintenance: boolean): void;
	getStartPosition(): MapPosition;
}
