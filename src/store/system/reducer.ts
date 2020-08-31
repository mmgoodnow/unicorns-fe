import {
	LOG_OUT,
	LOG_IN,
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
	isLoggedIn: undefined,
	user: null,
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
		case LOG_OUT:
			return {
				...state,
				isLoading: false,
				isLoggedIn: false,
				user: null,
			};
		case LOG_IN:
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
