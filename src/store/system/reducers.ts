import { LOG_IN, LOG_OUT, SystemState, RegistrationActionTypes } from "./types";

const initialState: SystemState = {
	isLoggedIn: false,
	user: {},
};

export function systemReducer(
	state = initialState,
	action: RegistrationActionTypes
): SystemState {
	switch (action.type) {
		case LOG_IN:
			return action.payload;
		case LOG_OUT:
			return initialState;
		default:
			return state;
	}
}
