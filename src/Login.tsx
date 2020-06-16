import * as React from "react";
import Form from "./Form";
import { Field } from "./Field";

export const Login: React.FunctionComponent = () => {
	return (
		<Form
			action="http://localhost:9000/login"
			submissionProp={() => {
				console.log("submitted");
			}}
			render={(handleChange: any) => (
				<React.Fragment>
					<h1>Log In</h1>
					<Field id="email" label="Email:" handleChange={handleChange} />
					<Field
						id="password"
						type="password"
						label="Password (6 character minimum):"
						handleChange={handleChange}
					/>
				</React.Fragment>
			)}
		/>
	);
};
