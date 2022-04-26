import { CharacterFactoryContract } from '../../contracts/CharacterFactoryContract';
import { Plate } from '../armors/Plate';
import { Swordsman } from '../characters/Swordsman';
import { Sword } from '../weapons/Sword';

export class SwordsmanFactory implements CharacterFactoryContract {
	public createCharacter(): Swordsman {
		return new Swordsman(10, 5, 15);
	}

	public createWeapon(): Sword {
		return new Sword();
	}

	public createArmor(): Plate {
		return new Plate();
	}
}
