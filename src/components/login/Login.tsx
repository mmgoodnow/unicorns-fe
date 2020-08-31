import React, { useCallback } from "react";
import Form from "../form/Form";
import { Field } from "../form/Field";
import { useHistory } from "react-router-dom";
import { login } from "../../api/authApi";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/system/actions";
import { User } from "../../models/auth";

export function Login() {
	const history = useHistory();
	const dispatch = useDispatch();
	const onSuccess = useCallback(
		({ user }: { user: User }) => {
			dispatch(loginSuccess(user));
			history.push("/lobby");
		},
		[dispatch, history]
	);
	return (
		<Form onSubmit={login} onSuccess={onSuccess}>
			<h1>Log In</h1>
			<Field id="email" label="Email:" />
			<Field id="password" type="password" label="Password:" />
		</Form>
	);
}
