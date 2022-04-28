import { DeviceContract } from './DeviceContract';

export interface LightDeviceContract extends DeviceContract {
	getBrightness(): number;
	setBrightness(brightness: number): void;
}
