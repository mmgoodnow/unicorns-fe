import {
	AUTH_STARTED,
	GenericAction,
	LOG_IN,
	LOG_OUT,
	LoginAction,
} from "../ActionTypes";
import { LoginCredentials, User } from "../../models/auth";
import {
	getCurrentUser,
	login as loginRequest,
	logout as logoutRequest,
} from "../../api/authApi";
import { AppThunk } from "../index";

function logoutSuccess(): GenericAction {
	return { type: LOG_OUT };
}

export function loginSuccess(user: User): LoginAction {
	return { type: LOG_IN, user };
}

function authStarted(): GenericAction {
	return { type: AUTH_STARTED };
}

export function login(credentials: LoginCredentials): AppThunk {
	return (dispatch) => {
		loginRequest(credentials)
			.then(({ user }) => dispatch(loginSuccess(user)))
			.catch((error) => console.error(error));
	};
}

export function logout(): AppThunk {
	return (dispatch) => {
		logoutRequest()
			.then(() => dispatch(logoutSuccess()))
			.catch((error) => console.error(error));
	};
}

export function authenticate(): AppThunk {
	return (dispatch) => {
		dispatch(authStarted());
		getCurrentUser()
			.then(({ logged_in, user }) => {
				if (!logged_in) {
					dispatch(logoutSuccess());
					return;
				}
				dispatch(loginSuccess(user));
			})
			.catch((error: any) => {
				return { logged_in: false, user: {} };
			});
	};
}
