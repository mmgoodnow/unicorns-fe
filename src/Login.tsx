import React from "react";
import Form from "./Form";
import { Field } from "./Field";
import { useHistory } from "react-router-dom";

interface ILoginProps {
	loginStatus: any;
}

export const Login: React.FunctionComponent<ILoginProps> = ({
	loginStatus,
}) => {
	const history = useHistory();
	return (
		<Form
			action="http://localhost:9000/login"
			submissionAction={(data: any) => {
				loginStatus(data);
				history.push("/");
			}}
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
};
