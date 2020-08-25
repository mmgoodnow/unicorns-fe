import React, { useCallback } from "react";
import Form from "../form/Form";
import { Field } from "../field/Field";
import { useHistory } from "react-router-dom";
import { login } from "../../api/authApi";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../store/system/actions";

export function Login() {
	const history = useHistory();
	const dispatch = useDispatch();
	const onSuccess = useCallback(
		({ user }) => {
			dispatch(loginSuccess(user));
			history.push("/lobby");
		},
		[dispatch, history]
	);
	return (
		<Form
			onSubmit={login}
			onSuccess={onSuccess}
			render={(handleChange: any) => (
				<React.Fragment>
					<h1>Log In</h1>
					<Field id="email" label="Email:" handleChange={handleChange} />
					<Field
						id="password"
						type="password"
						label="Password:"
						handleChange={handleChange}
					/>
				</React.Fragment>
			)}
		/>
	);
}
