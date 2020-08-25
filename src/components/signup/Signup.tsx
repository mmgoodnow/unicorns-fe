import React, { useCallback } from "react";
import Form from "../form/Form";
import { Field } from "../field/Field";
import { useHistory } from "react-router-dom";
import { signup } from "../../api/authApi";

export const Signup: React.FunctionComponent = () => {
	const history = useHistory();
	const onSuccess = useCallback(() => {
		history.push("/");
	}, [history]);
	return (
		<Form
			onSubmit={signup}
			onSuccess={onSuccess}
			render={(handleChange: any) => (
				<React.Fragment>
					<h1>Sign Up</h1>
					<Field id="email" label="Email:" handleChange={handleChange} />
					<Field id="username" label="Username:" handleChange={handleChange} />
					<Field
						id="password"
						type="password"
						label="Password:"
						handleChange={handleChange}
					/>
					<Field
						id="password_confirmation"
						type="password"
						label="Confirm Password:"
						handleChange={handleChange}
					/>
				</React.Fragment>
			)}
		/>
	);
};
