import { MonsterContext } from './classes/MonsterContext';
import { MonsterFactory } from './classes/MonsterFactory';

const monsterFactory = new MonsterFactory();
MonsterContext.move(
	monsterFactory,
	1000,
	'Orc_Warrior.png',
	'Orc Warrior',
	'Orc',
	100,
	60,
	100,
	0,
	10,
);

MonsterContext.move(
	monsterFactory,
	1000,
	'Orc_Warrior.png',
	'Orc Warrior',
	'Orc',
	100,
	60,
	101,
	5,
	15,
);

MonsterContext.move(
	monsterFactory,
	1001,
	'Orc_Archer.png',
	'Orc Archer',
	'Orc',
	80,
	40,
	102,
	10,
	10,
);

MonsterContext.move(
	monsterFactory,
	1001,
	'Orc_Archer.png',
	'Orc Archer',
	'Orc',
	80,
	40,
	103,
	15,
	5,
);

console.log('\n--- Monsters Shared Data (Intrinsic Data) ---');
console.log(monsterFactory.getMonsters());
