import React, { useCallback } from "react";
import Form from "../form/Form";
import { Field } from "../form/Field";
import { useHistory } from "react-router-dom";
import { login } from "../../api/authApi";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/system/actions";
import { User } from "../../models/auth";
import { Centered } from "../pages/Centered";

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
		<Centered style={{ width: "300px", minWidth: "200px" }}>
			<h1 className="text-center ostrich">Log In</h1>
			<Form onSubmit={login} onSuccess={onSuccess}>
				<Field id="email" label="Email:" />
				<Field id="password" type="password" label="Password:" />
			</Form>
		</Centered>
	);
}
