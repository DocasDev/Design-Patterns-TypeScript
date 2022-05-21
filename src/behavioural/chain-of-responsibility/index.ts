import { Game } from "./classes/Game";
import { FirstFloor } from "./classes/maps/FirstFloor";
import { SecondFloor } from "./classes/maps/SecondFloor";
import { SecretFloor } from "./classes/maps/SecretFloor";
import { Player } from "./classes/Player";

const firstFloor = new FirstFloor();
const secondFloor = new SecondFloor();
const secretFloor = new SecretFloor();

const player = new Player(
	{
		name: 'Player 01',
		level: 1,
		groupId: 0,
		position: {
			positionX: 0,
			positionY: 0
		}
	},
	firstFloor
);

const game = new Game(player);
game.addMap(
	firstFloor,
	secondFloor,
	secretFloor
);

game.playerTeleport('First Floor');
player.levelUp(9);
game.playerTeleport('First Floor');

game.playerTeleport('Second Floor');
player.levelUp(10);
game.playerTeleport('Second Floor');

game.playerTeleport('Secret Floor');
player.groupId = 1;	//Promove player to VIP
game.playerTeleport('Secret Floor');

console.log(player);
