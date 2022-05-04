import { MonsterFlyweightContract } from '../contracts/MonsterFlyweightContract';
import { MonsterFlyweightData } from '../types/MonsterTypes';

export class MonsterFlyweight implements MonsterFlyweightContract {
	private readonly _intrinsicState: MonsterFlyweightData;

	constructor(instrinsicState: MonsterFlyweightData) {
		this._intrinsicState = instrinsicState;
	}

	public move(guid: number, positionX: number, positionY: number): void {
		console.log(
			`The "${this._intrinsicState.name}" with GUID="${guid}" was moved to (${positionX},${positionY})`,
		);
	}
}
