import { PlayerFactory } from "./classes/PlayerFactory";

const playerFactory = new PlayerFactory();
const player1 = playerFactory.makePlayer('Asaurus', 10, 2, 1000);
const player2 = playerFactory.makePlayer('StableLips', 8, 5, 1000);

for(let i = 0; i < 20; i++){
    if(i % 2 === 0){
        player1.doAttack(player2);
    }else{
        player2.doAttack(player1);
    }
}