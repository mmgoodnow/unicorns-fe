import {
	LOG_OUT_SUCCESS,
	LOG_IN_SUCCESS,
	SystemAction,
	AUTH_STARTED,
	LoginAction,
} from "../ActionTypes";

export interface SystemState {
	isLoggedIn: boolean | undefined;
	user: any;
	isLoading: boolean;
}

const initialState: SystemState = {
	isLoggedIn: false,
	user: {},
	isLoading: false,
};

export function systemReducer(
	state = initialState,
	action: SystemAction
): SystemState {
	switch (action.type) {
		case AUTH_STARTED:
			return {
				...state,
				isLoading: true,
			};
		case LOG_OUT_SUCCESS:
			return initialState;
		case LOG_IN_SUCCESS:
			const { user } = action as LoginAction;
			return {
				...state,
				isLoading: false,
				isLoggedIn: true,
				user,
			};
		default:
			return state;
	}
}
