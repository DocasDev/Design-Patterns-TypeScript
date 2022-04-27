import { DeviceContract } from '../../contracts/DeviceContract';
import { LightDeviceContract } from '../../contracts/LightDeviceContract';
import { TouchLightRemoteControlContract } from '../../contracts/TouchLightRemoteControlContract';
import { TouchRemoteControlContract } from '../../contracts/TouchRemoteControlContract';

export class TouchLightRemoteControl
	implements TouchRemoteControlContract, TouchLightRemoteControlContract
{
	protected readonly _device: DeviceContract;

	constructor(device: DeviceContract) {
		this._device = device;
	}

	public getBrightness(): number {
		return (this._device as unknown as LightDeviceContract).getBrightness();
	}

	public setBrightness(brightness: number): void {
		(this._device as unknown as LightDeviceContract).setBrightness(
			brightness,
		);
	}

	public togglePower(): void {
		this._device.setPower(!this._device.getPower());
	}
}
