import React, { useCallback } from "react";
import Form from "../form/Form";
import { Field } from "../form/Field";
import { useHistory } from "react-router-dom";
import { signup } from "../../api/authApi";

export const Signup: React.FunctionComponent = () => {
	const history = useHistory();
	const onSuccess = useCallback(() => {
		history.push("/");
	}, [history]);
	return (
		<Form onSubmit={signup} onSuccess={onSuccess}>
			<h1>Sign Up</h1>
			<Field id="email" label="Email:" />
			<Field id="username" label="Username:" />
			<Field id="password" type="password" label="Password:" />
			<Field
				id="password_confirmation"
				type="password"
				label="Confirm Password:"
			/>
		</Form>
	);
};
