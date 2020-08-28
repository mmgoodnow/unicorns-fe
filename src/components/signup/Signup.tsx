import React, { useCallback } from "react";
import Form from "../form/Form";
import { Field } from "../form/Field";
import { useHistory } from "react-router-dom";
import { signup } from "../../api/authApi";
import { Centered } from "../pages/Centered";

export const Signup: React.FunctionComponent = () => {
	const history = useHistory();
	const onSuccess = useCallback(() => {
		history.push("/login");
	}, [history]);
	return (
		<Centered style={{ width: "300px", minWidth: "200px" }}>
			<h1 className="text-center ostrich">Sign Up</h1>
			<Form onSubmit={signup} onSuccess={onSuccess}>
				<Field id="email" type="email" label="Email:" />
				<Field id="username" label="Username:" />
				<Field id="password" type="password" label="Password:" />
				<Field
					id="password_confirmation"
					type="password"
					label="Confirm Password:"
				/>
			</Form>
		</Centered>
	);
};
