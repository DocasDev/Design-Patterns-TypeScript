import { CommandContract } from '../../contracts/CommandContract';
import { SmartLight } from '../devices/SmartLight';

export class SmartLightIncreaseIntensityCommand implements CommandContract {
	private _device: SmartLight;

	constructor(device: SmartLight) {
		this._device = device;
	}

	public execute(): void {
		this._device.increaseIntensity();
	}

	public undo(): void {
		this._device.decreaseIntensity();
	}
}
