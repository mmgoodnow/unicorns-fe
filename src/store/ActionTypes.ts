export const AUTH_STARTED = "AUTH_STARTED";
export const LOG_IN = "LOG_IN";
export const LOG_IN_ERROR = "LOG_IN_ERROR";
export const LOG_OUT = "LOG_OUT";
export const LOG_OUT_ERROR = "LOG_OUT_ERROR";

export interface GenericAction {
	type: string;
}

export interface LoginAction extends GenericAction {
	user: any;
}

export type SystemAction = GenericAction | LoginAction;
