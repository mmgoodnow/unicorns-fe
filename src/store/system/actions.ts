import {
	AUTH_STARTED,
	GenericAction,
	LOG_IN_SUCCESS,
	LOG_OUT_SUCCESS,
	LoginAction,
} from "../ActionTypes";
import { LoginCredentials } from "../../models/auth";
import {
	getCurrentUser,
	login as loginRequest,
	logout as logoutRequest,
} from "../../api/authApi";
import { AppThunk } from "../index";

function logoutSuccess(): GenericAction {
	return { type: LOG_OUT_SUCCESS };
}

function loginSuccess(user: any): LoginAction {
	return { type: LOG_IN_SUCCESS, user };
}

function authStarted(): GenericAction {
	return { type: AUTH_STARTED };
}

export function login(credentials: LoginCredentials): AppThunk {
	return (dispatch) => {
		loginRequest(credentials)
			.then(({ user }) => dispatch(loginSuccess(user)))
			.catch((error) => console.log(error));
	};
}

export function logout(): AppThunk {
	return (dispatch) => {
		logoutRequest()
			.then(() => dispatch(logoutSuccess()))
			.catch((error) => console.log(error));
	};
}

export function authenticate(): AppThunk {
	return (dispatch) => {
		dispatch(authStarted());
		getCurrentUser().then(({ user }) => dispatch(loginSuccess(user)));
	};
}
