import { Light } from './classes/devices/Light';
import { Radio } from './classes/devices/Radio';
import { TV } from './classes/devices/TV';
import { BasicRemoteControl } from './classes/remote-controls/BasicRemoteControl';
import { TouchLightRemoteControl } from './classes/remote-controls/TouchLightRemoteControl';
import { TouchRemoteControl } from './classes/remote-controls/TouchRemoteControl';

const tv = new TV('Living room TV', 'Samsung', '50AU7700');
const radio = new Radio('Bedroom radio', 'Motorola', 'DEP450');
const light = new Light('Bedroom light', 'Xiaomi', 'Smart Light Mi');

const basicTVControl = new BasicRemoteControl(tv);
const basicRadioControl = new BasicRemoteControl(radio);
const basicLightControl = new BasicRemoteControl(light);

const touchTVControl = new TouchRemoteControl(tv);
const touchRadioControl = new TouchRemoteControl(radio);
const touchLightControl = new TouchLightRemoteControl(light);

basicTVControl.togglePower();
basicRadioControl.togglePower();
basicLightControl.togglePower();

console.log('\n--- Devices state after remote power up ---\n');
console.log(tv);
console.log(radio);
console.log(light);

basicTVControl.togglePower();
basicRadioControl.togglePower();
basicLightControl.togglePower();

console.log('\n--- Devices state after remote power down ---\n');
console.log(tv);
console.log(radio);
console.log(light);

touchTVControl.togglePower();
touchTVControl.setVolume(50);

touchRadioControl.togglePower();
touchRadioControl.setVolume(30);

touchLightControl.togglePower();
touchLightControl.setBrightness(70);

console.log(
	'\n--- Devices state after remote power up and set volume and brightness ---\n',
);
console.log(tv);
console.log(radio);
console.log(light);
