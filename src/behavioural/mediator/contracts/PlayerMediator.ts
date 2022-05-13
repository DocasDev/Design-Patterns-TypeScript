import { PlayerContract } from "./PlayerContract";

export interface PlayerMediator{
    setPlayer(player: PlayerContract): void;
    calculateDamage(target: PlayerContract): void;
}