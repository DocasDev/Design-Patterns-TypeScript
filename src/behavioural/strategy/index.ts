import { Game } from './classes/Game';
import { Monster } from './classes/Monster';
import { Player } from './classes/Player';

const player = new Player('QuodDG');
const game = new Game(player);
const orc = new Monster('Orc', 30, 10);
const poring = new Monster('Poring', 5, 1);
const zombie = new Monster('Zombie', 10, 3);
const darkNight = new Monster('Dark knight', 70, 20);

console.log(player);

game.defeatMonster(orc);
game.defeatMonster(poring);

console.log(player);
