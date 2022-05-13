import { PlayerStateContract } from "./PlayerStateContract";

export interface PlayerContract {
	getStateName(): string;
	takeDamage(damage: number): void;
	doAttack(enemy: PlayerContract): void;
	move(positionX: number, positionY: number): void;
	changeState(newState: PlayerStateContract): void;
}
