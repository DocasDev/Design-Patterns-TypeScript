export abstract class CommandContract {
	abstract execute(): void;
	undo(): void{}
}