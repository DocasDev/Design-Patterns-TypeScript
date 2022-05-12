import { CommandContract } from '../../contracts/CommandContract';
import { SmartLight } from '../devices/SmartLight';

export class SmartLightTogglePowerCommand extends CommandContract {
	private readonly _device: SmartLight;

	constructor(device: SmartLight) {
		super();
		this._device = device;
	}

	public execute(): void {
		this._device.togglePower();
	}
}
