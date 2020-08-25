import { LOG_IN_STARTED, LOG_OUT_SUCCESS } from "../ActionTypes";
import { LoginCredentials } from "../../models/auth";
import { login as loginRequest } from "../../api/authApi";
import { AppThunk } from "../index";

// export function login(systemState: SystemState): RegistrationActionTypes {
// 	return {
// 		type: LOG_IN_STARTED,
// 		payload: systemState,
// 	};
// }

export function logout(): RegistrationActionTypes {
	return {
		type: LOG_OUT_SUCCESS,
	};
}

export function login(credentials: LoginCredentials): AppThunk {
	return (dispatch) => {
		dispatch();
		loginRequest(credentials).then();
	};
}

export function authenticate(): AppThunk {
	return (dispatch) => {
		dispatch({
			type: LOG_IN_STARTED,
		});
	};
}
