export abstract class Utils {
	public static getRandomNumber(max: number): number {
		return Math.floor(Math.random() * max);
	}
}
