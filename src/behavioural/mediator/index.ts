import { Game } from "./classes/Game";
import { Player } from "./classes/Player";
import { AttackMediator } from "./classes/player-mediators/AttackMediator";
import { PlayerContract } from "./contracts/PlayerContract";

const attackMediator = new AttackMediator();

const player1 = new Player('10001', 'P-01', 20, 5, 10, 500);
player1.attachAttackMediator(attackMediator);

const player2 = new Player('10002', 'P-02', 20, 5, 10, 500);
player2.attachAttackMediator(attackMediator);

const game = new Game();
game.addPlayer(player1, player2);

let winner: PlayerContract | null = null;
let i = 0;
let attackerGuid = '';
let targetGuid = '';
while(winner === null){
    if(i % 2 === 0){
        attackerGuid = player1.getGuid();
        targetGuid = player2.getGuid();
    }else{
        attackerGuid = player2.getGuid();
        targetGuid = player1.getGuid();
    }

    game.doAttack(attackerGuid, targetGuid);
    winner = game.getWinner();
    i++;
}

console.log(`The player "${winner.getName()}" is winner!`);
console.log(`Battle finish in "${i + 1}" turns.\n---\n`);