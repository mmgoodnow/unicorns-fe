import { LOG_IN, LOG_OUT, LoginState, RegistrationActionTypes } from "./types";

const initialState: LoginState = {
	isLoggedIn: false,
	user: {},
};

export function systemReducer(
	state = initialState,
	action: RegistrationActionTypes
): LoginState {
	switch (action.type) {
		case LOG_IN:
			return action.payload;
		case LOG_OUT:
			return initialState;
		default:
			return state;
	}
}
