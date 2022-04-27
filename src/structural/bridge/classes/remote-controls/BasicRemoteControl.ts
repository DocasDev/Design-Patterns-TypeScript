import { DeviceContract } from '../../contracts/DeviceContract';
import { RemoteControlContract } from '../../contracts/RemoteControlContract';

export class BasicRemoteControl implements RemoteControlContract {
	protected readonly _device: DeviceContract;

	constructor(device: DeviceContract) {
		this._device = device;
	}

	public togglePower(): void {
		this._device.setPower(!this._device.getPower());
	}
}
