// Это не интерфейс, потому что есть проверки instanceof ToHTML
export abstract class ToHTML {
	abstract getCode(): string;
}

export class Described extends ToHTML {
	constructor(public readonly name: string, public readonly description: string) {
		super();
	}

	getCode(): string {
		return `<b>${this.name}</b> - <tg-spoiler>${this.description}</tg-spoiler>`;
	}
}
