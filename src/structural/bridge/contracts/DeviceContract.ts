export interface DeviceContract {
	getName(): string;
	setName(name: string): void;
	getMake(): string;
	setMake(make: string): void;
	getModel(): string;
	setModel(model: string): void;
	getPower(): boolean;
	setPower(status: boolean): void;
}
