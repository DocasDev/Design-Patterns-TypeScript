import { PlayerContract } from "../contracts/PlayerContract";

export class Game{
    private _players: Array<PlayerContract>;

    constructor(){
        this._players = new Array<PlayerContract>();
    }

    public addPlayer(...players: Array<PlayerContract>): void{
        players.forEach(player => this._players.push(player));
    }

    public doAttack(attackerGuid: string, targetGuid: string): void{
        const player = this._players.find(player => player.getGuid() === attackerGuid);
        const target = this._players.find(player => player.getGuid() === targetGuid);
        if(player === undefined 
            || target === undefined
            || player.isDead()
            || target.isDead())
        {
            return;
        }

        const attackMediator = player.getAttackMediator();
        if(attackMediator === null){
            return;
        }

        attackMediator.calculateDamage(target);
    }

    public getWinner(): PlayerContract | null{
        const livePlayers = this._players.filter(player => !player.isDead());
        if(livePlayers.length === 1){
            return livePlayers[0];
        }

        return null;
    }
}