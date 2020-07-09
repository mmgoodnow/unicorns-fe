export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

export interface SystemState {
	isLoggedIn: boolean;
	user: any;
}

interface LoginAction {
	type: typeof LOG_IN;
	payload: LoginState;
}

interface LogoutAction {
	type: typeof LOG_OUT;
}

export type RegistrationActionTypes = LoginAction | LogoutAction;
