import React, { useCallback } from "react";
import Form from "../form/Form";
import { Field } from "../form/Field";
import { useHistory, useLocation } from "react-router-dom";
import { login } from "../../api/authApi";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/system/actions";
import { LoginLocationState, User } from "../../models/auth";
import { Centered } from "../pages/Centered";

export function Login() {
	const history = useHistory();
	const { state: { from } = {} } = useLocation<LoginLocationState>();
	const dispatch = useDispatch();
	const onSuccess = useCallback(
		({ user }: { user: User }) => {
			dispatch(loginSuccess(user));
			history.push(from || "/lobby");
		},
		[dispatch, history, from]
	);
	return (
		<Centered style={{ width: "300px", minWidth: "200px" }}>
			<h1 className="text-center ostrich">Log In</h1>
			<Form onSubmit={login} onSuccess={onSuccess}>
				<Field id="email" label="Email:" />
				<Field id="password" type="password" label="Password:" />
			</Form>
		</Centered>
	);
}
