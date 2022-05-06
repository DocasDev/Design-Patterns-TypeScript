import { CommandContract } from '../../contracts/CommandContract';
import { SmartLight } from '../devices/SmartLight';

export class SmartLightTogglePowerCommand implements CommandContract {
	private readonly _device: SmartLight;

	constructor(device: SmartLight) {
		this._device = device;
	}

	public execute(): void {
		this._device.togglePower();
	}

	public undo(): void {
		this._device.togglePower();
	}
}
