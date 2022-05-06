export interface CommandContract {
	execute(): void;
	undo(): void;
}
