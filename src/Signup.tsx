import * as React from "react";
import Form from "./Form";
import { Field } from "./Field";
import { useHistory } from "react-router-dom";

export const Signup: React.FunctionComponent = () => {
	const history = useHistory();
	return (
		<Form
			action="http://localhost:9000/signup"
			submissionAction={(data: any) => {
				history.push("/");
			}}
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
