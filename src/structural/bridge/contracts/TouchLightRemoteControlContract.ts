import { TouchRemoteControlContract } from './TouchRemoteControlContract';

export interface TouchLightRemoteControlContract
	extends TouchRemoteControlContract {
	getBrightness(): number;
	setBrightness(brightness: number): void;
}
