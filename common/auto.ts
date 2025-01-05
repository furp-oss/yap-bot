import { ToHTML } from "./result.ts";
 
export abstract class ToHTML {
	abstract getCode(): string;
}

interface Customization {
	command: string;
	text: {
		solo: string;
		group: string;
		help: string;
		button?: string;
	};

	getRandom: () => ToHTML;
	article: {
		title: string;
		description: string;
		image: { url: string; width?: number; height?: number };
	};

	base?: { sendCommand?: string; orUseButton?: string };
}

export declare function auto(id: BotIds, config: Customization): unknown;
