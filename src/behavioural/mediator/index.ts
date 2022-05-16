import { Game } from "./classes/Game";
import { Player } from "./classes/Player";
import { AttackMediator } from "./classes/player-mediators/AttackMediator";
import { PlayerContract } from "./contracts/PlayerContract";

type Winner = PlayerContract | null;

const attackMediator = new AttackMediator();
const player1 = new Player(
    {
        guid: '10001', 
        name: 'P-01', 
        strength: 20, 
        dexterity: 5, 
        resistance: 10, 
        maxLife: 500
    }, 
    attackMediator
);
const player2 = new Player(
    {
        guid: '10002', 
        name: 'P-02', 
        strength: 20, 
        dexterity: 5, 
        resistance: 10, 
        maxLife: 500
    }, 
    attackMediator
);
const game = new Game();
game.addPlayer(player1, player2);

let winner: Winner = null;
let attackerGuid = player1.getGuid();
let targetGuid = player2.getGuid();

while(winner === null){
    game.doAttack(attackerGuid, targetGuid);
    winner = game.getWinner();
    //Switch players to next turn
    [attackerGuid, targetGuid] = [targetGuid, attackerGuid];
}

console.log(`The player "${winner.getName()}" is winner!\n---\n`);