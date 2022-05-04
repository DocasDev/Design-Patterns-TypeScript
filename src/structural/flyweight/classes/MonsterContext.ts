import { MonsterFactory } from './MonsterFactory';

export abstract class MonsterContext {
	static move(
		factory: MonsterFactory,
		id: number,
		sprite: string,
		name: string,
		monsterClass: string,
		strength: number,
		resistence: number,
		guid: number,
		positionX: number,
		positionY: number,
	): void {
		const monster = factory.makeMonster({
			id,
			sprite,
			name,
			monsterClass,
			strength,
			resistence,
		});
		monster.move(guid, positionX, positionY);
	}
}
