export const LOG_IN = "LOG_IN";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const LOG_IN_ERROR = "LOG_IN_ERROR";

export const LOG_OUT = "LOG_OUT";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_ERROR = "LOG_OUT_ERROR";

export interface SystemState {
	isLoggedIn: boolean;
	user: any;
	isFetching: boolean;
}

interface LoginAction {
	type: typeof LOG_IN;
	payload: SystemState;
}

interface LogoutAction {
	type: typeof LOG_OUT;
}

export type RegistrationActionTypes = LoginAction | LogoutAction;
