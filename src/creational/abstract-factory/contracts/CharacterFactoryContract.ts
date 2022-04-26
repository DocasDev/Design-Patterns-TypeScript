import { ArmorContract } from './ArmorContract';
import { CharacterContract } from './CharacterContract';
import { WeaponContract } from './WeaponContract';

export interface CharacterFactoryContract {
	createCharacter(name: string): CharacterContract;
	createWeapon(): WeaponContract;
	createArmor(): ArmorContract;
}
