import { ArmorContract } from './ArmorContract';
import { CharacterContract } from './CharacterContract';
import { WeaponContract } from './WeaponContract';

export interface CharacterFactoryContract {
	createCharacter(): CharacterContract;
	createWeapon(): WeaponContract;
	createArmor(): ArmorContract;
}
