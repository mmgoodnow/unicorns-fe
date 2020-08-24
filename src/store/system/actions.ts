import { LOG_IN, LOG_OUT, SystemState, RegistrationActionTypes } from "./types";
import { LoginCredentials } from "../../models/auth";
import { login as loginRequest } from "../../api/authApi";
import { AppThunk } from "../index";

// export function login(systemState: SystemState): RegistrationActionTypes {
// 	return {
// 		type: LOG_IN,
// 		payload: systemState,
// 	};
// }

export function logout(): RegistrationActionTypes {
	return {
		type: LOG_OUT,
	};
}

export function login(credentials: LoginCredentials): AppThunk {
	return (dispatch) => {
		dispatch();
		loginRequest(credentials).then();
	};
}
