import { Unicorn } from "./Unicorn";
import basic_unicorn_flannel from "./images/basic_unicorn_flannel.png";
import basic_unicorn_flowers from "./images/basic_unicorn_flowers.png";
import basic_unicorn_narwhal from "./images/basic_unicorn_narwhal.png";
import basic_unicorn_pigtails from "./images/basic_unicorn_pigtails.png";
import basic_unicorn_polo from "./images/basic_unicorn_polo.png";
import basic_unicorn_scarf from "./images/basic_unicorn_scarf.png";
import basic_unicorn_selfie from "./images/basic_unicorn_selfie.png";
import basic_unicorn_starbucks from "./images/basic_unicorn_starbucks.png";
import { CardType } from "./CardData";

export enum BasicUnicornKind {
	FLANNEL = "FLANNEL",
	FLOWERS = "FLOWERS",
	NARWHAL = "NARWHAL",
	PIGTAILS = "PIGTAILS",
	POLO = "POLO",
	SCARF = "SCARF",
	SELFIE = "SELFIE",
	STARBUCKS = "STARBUCKS",
}

interface BasicUnicornOptions {
	multiplicity: number;
	url: string;
	name?: string;
	isNarwhal?: boolean;
	description: string;
}

const config: { [key in BasicUnicornKind]: BasicUnicornOptions } = {
	[BasicUnicornKind.FLANNEL]: {
		multiplicity: 2,
		url: basic_unicorn_flannel,
		description: "Beards are like, so hot.",
	},
	[BasicUnicornKind.FLOWERS]: {
		multiplicity: 1,
		url: basic_unicorn_flowers,
		description: "Dance like nobody's watching.",
	},
	[BasicUnicornKind.NARWHAL]: {
		multiplicity: 1,
		url: basic_unicorn_narwhal,
		name: "Narwhal",
		isNarwhal: true,
		description: "This card has no special powers, but it sure is cute!",
	},
	[BasicUnicornKind.PIGTAILS]: {
		multiplicity: 1,
		url: basic_unicorn_pigtails,
		description: "💖🙌💅🙌💖💁💁😂😂😂‍‍",
	},
	[BasicUnicornKind.POLO]: {
		multiplicity: 1,
		url: basic_unicorn_polo,
		description: "Popped collars are for date nights only.",
	},
	[BasicUnicornKind.SCARF]: {
		multiplicity: 1,
		url: basic_unicorn_scarf,
		description: "Vinyl records and mixtapes only.",
	},
	[BasicUnicornKind.SELFIE]: {
		multiplicity: 1,
		url: basic_unicorn_selfie,
		description:
			"#nomakeup #nofilter #sunnies #shameless #selfie #basic #TGIF #unicornhairdontcare",
	},
	[BasicUnicornKind.STARBUCKS]: {
		multiplicity: 2,
		url: basic_unicorn_starbucks,
		description: "Pumpkin spice is the pumpkin spice of life.",
	},
};

export class BasicUnicorn implements Unicorn {
	kind: BasicUnicornKind;
	victoryPoints: number = 1;
	type: CardType = CardType.BasicUnicorn;
	description: string;
	isNarwhal: boolean;
	name: string;
	url: string;

	constructor(kind: BasicUnicornKind) {
		this.kind = kind;
		this.name = config[kind].name ?? "Basic Unicorn";
		this.isNarwhal = config[kind].isNarwhal ?? false;
		this.description = config[kind].description;
		this.url = config[kind].url;
	}
}

export function getAllBasicUnicorns(): BasicUnicorn[] {
	return Object.entries(config)
		.map(([k, { multiplicity }]: [string, BasicUnicornOptions]) =>
			Array.from(
				new Array(multiplicity).keys(),
				(i) => new BasicUnicorn(k as BasicUnicornKind)
			)
		)
		.flat();
}
