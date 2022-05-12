import { CommandContract } from '../contracts/CommandContract';

export type SmartHouseCommmands = {
	[k: string]: CommandContract;
};

export class SmartHouseApp {
	private _commands: SmartHouseCommmands;

	constructor() {
		this._commands = {};
	}

	public addCommand(key: string, command: CommandContract): void {
		if (!(key in this._commands)) {
			this._commands[key] = command;
		}
	}

	public executeCommand(key: string): void {
		if (key in this._commands) {
			this._commands[key].execute();
		}
	}

	public undoCommand(key: string): void {
		if (key in this._commands) {
			this._commands[key].undo();
		}
	}
}
