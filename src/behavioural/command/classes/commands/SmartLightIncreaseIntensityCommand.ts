import { CommandContract } from '../../contracts/CommandContract';
import { SmartLight } from '../devices/SmartLight';

export class SmartLightIncreaseIntensityCommand extends CommandContract {
	private readonly _device: SmartLight;

	constructor(device: SmartLight) {
		super();
		this._device = device;
	}

	public execute(): void {
		this._device.increaseIntensity();
	}

	public undo(): void {
		this._device.decreaseIntensity();
	}
}
