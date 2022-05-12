import { SmartLightDecreaseIntensityCommand } from './classes/commands/SmartLightDecreaseIntensityCommand';
import { SmartLightIncreaseIntensityCommand } from './classes/commands/SmartLightIncreaseIntensityCommand';
import { SmartLightTogglePowerCommand } from './classes/commands/SmartLightTogglePowerCommand';
import { SmartLight } from './classes/devices/SmartLight';
import { SmartHouseApp } from './classes/SmartHouseApp';

//Receivers
const bedroomLight = new SmartLight('Bedroom Light');

//Commands
const bedroomLightTogglePowerCommand = new SmartLightTogglePowerCommand(
	bedroomLight,
);
const bedroomLightIncreaseIntensityCommand =
	new SmartLightIncreaseIntensityCommand(bedroomLight);
const bedroomLightDecreaseIntensityCommand =
	new SmartLightDecreaseIntensityCommand(bedroomLight);

//App Control (Invoker)
const smartHouseApp = new SmartHouseApp();

smartHouseApp.addCommand('btn-1', bedroomLightTogglePowerCommand);
smartHouseApp.addCommand('btn-2', bedroomLightIncreaseIntensityCommand);
smartHouseApp.addCommand('btn-3', bedroomLightDecreaseIntensityCommand);

smartHouseApp.executeCommand('btn-1');
smartHouseApp.undoCommand('btn-1');

smartHouseApp.executeCommand('btn-2');
smartHouseApp.undoCommand('btn-2');

smartHouseApp.executeCommand('btn-3');
smartHouseApp.undoCommand('btn-3');

for (let i = 0; i < 10; i++) {
	smartHouseApp.executeCommand('btn-2');
}

for (let i = 0; i < 10; i++) {
	smartHouseApp.executeCommand('btn-3');
}
