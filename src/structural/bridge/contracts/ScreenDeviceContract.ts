import { DeviceContract } from './DeviceContract';

export interface ScreenDeviceContract extends DeviceContract {
	getVolume(): number;
	setVolume(volume: number): void;
}
