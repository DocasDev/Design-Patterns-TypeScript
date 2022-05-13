import { PlayerIdle } from "./classes/player-states/PlayerIdle";
import { PlayerFactory } from "./classes/PlayerFactory";

const playerFactory = new PlayerFactory();
const player1 = playerFactory.makePlayer('P-01', 40, 2, 1000);
const player2 = playerFactory.makePlayer('P-02', 35, 7, 1000);

for (let i = 0; i < 10; i++) {
	console.log(`Start turn "${i + 1}"\n---\n`);
	if (i % 2 === 0) {
		//Simulate stun delay of one turn
		if (player1.getStateName() === 'Stunned') {
			player1.changeState(new PlayerIdle(player1));
			continue;
		}
		player1.doAttack(player2);
	} else {
		//Simulate stun delay of one turn
		if (player2.getStateName() === 'Stunned') {
			player2.changeState(new PlayerIdle(player2));
			continue;
		}
		player2.doAttack(player1);
	}
}
