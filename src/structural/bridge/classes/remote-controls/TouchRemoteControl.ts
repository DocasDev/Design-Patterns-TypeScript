import { DeviceContract } from '../../contracts/DeviceContract';
import { SoundDeviceContract } from '../../contracts/SoundDeviceContract';
import { TouchSoundRemoteControlContract } from '../../contracts/TouchSoundRemoteControlContract';

export class TouchRemoteControl implements TouchSoundRemoteControlContract {
	protected readonly _device: DeviceContract;

	constructor(device: DeviceContract) {
		this._device = device;
	}

	public getVolume(): number {
		return (this._device as unknown as SoundDeviceContract).getVolume();
	}

	public setVolume(volume: number): void {
		(this._device as unknown as SoundDeviceContract).setVolume(volume);
	}

	public togglePower(): void {
		this._device.setPower(!this._device.getPower());
	}
}
