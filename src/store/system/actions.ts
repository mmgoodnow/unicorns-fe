import { LOG_IN, LOG_OUT, LoginState, RegistrationActionTypes } from "./types";

export function login(loginState: LoginState): RegistrationActionTypes {
	return {
		type: LOG_IN,
		payload: loginState,
	};
}

export function logout(): RegistrationActionTypes {
	return {
		type: LOG_OUT,
	};
}
