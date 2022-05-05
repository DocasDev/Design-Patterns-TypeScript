import { Experience100ThBirthdayEvent } from './classes/Events/Experience100ThBirthdayEvent';
import { ExperienceNewYearEvent } from './classes/Events/ExperienceNewYearEvent';
import { Game } from './classes/Game';
import { Monster } from './classes/Monster';
import { Player } from './classes/Player';

const player = new Player('Sirius');
const game = new Game(player);
const newYearEvent = new ExperienceNewYearEvent();
const _100ThBirthdayEvent = new Experience100ThBirthdayEvent();

game.addMonster(
	new Monster(10001, 1001, 'Orc', 30, 10),
	new Monster(10002, 1002, 'Poring', 5, 1),
	new Monster(10003, 1003, 'Zombie', 10, 3),
	new Monster(10004, 1004, 'Dark knight', 70, 20),
);

console.log('--- Before Event ---\n');

game.defeatMonster(10001); //Orc
game.defeatMonster(10002); //Poring
game.defeatMonster(10003); //Zombie
game.defeatMonster(10004); //Dark Knight

console.log('--- After New Year Event ---\n');

game.setExperienceEvent(newYearEvent);

game.defeatMonster(10001); //Orc
game.defeatMonster(10002); //Poring
game.defeatMonster(10003); //Zombie
game.defeatMonster(10004); //Dark Knight

console.log('--- After 100th Birthday Event ---\n');

game.setExperienceEvent(_100ThBirthdayEvent);

game.defeatMonster(10001); //Orc
game.defeatMonster(10002); //Poring
game.defeatMonster(10003); //Zombie
game.defeatMonster(10004); //Dark Knight

console.log(player);
