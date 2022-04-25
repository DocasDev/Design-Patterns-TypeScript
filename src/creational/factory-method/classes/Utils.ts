export abstract class Utils {
	public static getRandomNumber(max: number): number {
		return Math.floor(Math.random() * max);
	}

	public static breakLine(strings: any, ...values: any): string {
		return (
			strings.reduce(
				(
					previousValue: string,
					currentValue: string,
					currentIndex: number,
				) =>
					`${previousValue}${currentValue}${
						values[currentIndex] ? values[currentIndex] : ''
					}`,
				'',
			) + '\n'
		);
	}

	public static pretier(strings: any, ...values: any): string {
		return (
			'---------\n' +
			strings.reduce(
				(
					previousValue: string,
					currentValue: string,
					currentIndex: number,
				) =>
					`${previousValue}${currentValue}${
						values[currentIndex] ? values[currentIndex] : ''
					}`,
				'',
			) +
			'\n---------\n'
		);
	}
}
