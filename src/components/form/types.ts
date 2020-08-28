export interface IValues {
	[key: string]: string;
}
export interface IErrors {
	root: string[];
	fields: {
		[key: string]: string;
	};
}
