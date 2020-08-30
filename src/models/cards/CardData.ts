export enum CardType {
	BasicUnicorn,
	MagicalUnicorn,
	MagicCard,
	UpgradeCard,
	DowngradeCard,
	InstantCard,
}

export interface CardData {
	type: CardType;
	name: string;
	description: string;
	url: string;
}
