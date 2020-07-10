import { LOG_IN, LOG_OUT, SystemState, RegistrationActionTypes } from "./types";

export function login(systemState: SystemState): RegistrationActionTypes {
	return {
		type: LOG_IN,
		payload: systemState,
	};
}

export function logout(): RegistrationActionTypes {
	return {
		type: LOG_OUT,
	};
}
