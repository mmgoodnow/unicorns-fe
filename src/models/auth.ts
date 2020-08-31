import { Location } from "history";
export interface LoginCredentials {
	email: string;
	password: string;
}

export interface SignupCredentials extends LoginCredentials {
	username: string;
}

export interface User {
	id: number;
	username: string;
	email: string;
}

export interface LoginLocationState {
	from: Location;
}
