import { ExperienceNewYearEvent } from './classes/Events/ExperienceNewYearEvent';
import { Game } from './classes/Game';
import { Monster } from './classes/Monster';
import { Player } from './classes/Player';

const player = new Player('QuodDG');
const game = new Game(player);
const orc = new Monster('Orc', 30, 10);
const poring = new Monster('Poring', 5, 1);
const zombie = new Monster('Zombie', 10, 3);
const darkNight = new Monster('Dark knight', 70, 20);
const newYearEvent = new ExperienceNewYearEvent();

console.log('--- Before Event ---\n');

game.defeatMonster(orc);
game.defeatMonster(poring);
game.defeatMonster(zombie);
game.defeatMonster(darkNight);

game.setExperienceEvent(newYearEvent);

console.log('--- After Event ---\n');

game.defeatMonster(orc);
game.defeatMonster(poring);
game.defeatMonster(zombie);
game.defeatMonster(darkNight);

console.log(player);
