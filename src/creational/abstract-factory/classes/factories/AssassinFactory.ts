import { CharacterFactoryContract } from '../../contracts/CharacterFactoryContract';
import { Robe } from '../armors/Robe';
import { Assassin } from '../characters/Assassin';
import { Knife } from '../weapons/Knife';

export class AssassinFactory implements CharacterFactoryContract {
	public createCharacter(): Assassin {
		return new Assassin(5, 15, 10);
	}

	public createWeapon(): Knife {
		return new Knife();
	}

	public createArmor(): Robe {
		return new Robe();
	}
}
