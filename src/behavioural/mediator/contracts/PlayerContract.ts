import { PlayerMediator } from "./PlayerMediator";

export interface PlayerContract{
    attachAttackMediator(mediator: PlayerMediator): void;
    getAttackMediator(): PlayerMediator;
    getName(): string;
    getGuid(): string;
    getDamage(): number;
    getDefense(): number;
    takeDamage(damage: number): void;
    receiveHealing(healing: number): void;
    isDead(): boolean;
}