import { TouchRemoteControlContract } from './TouchRemoteControlContract';

export interface TouchSoundRemoteControlContract
	extends TouchRemoteControlContract {
	getVolume(): number;
	setVolume(volume: number): void;
}
