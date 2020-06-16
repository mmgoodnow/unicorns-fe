import * as React from "react";
import Form from "./Form";
import { Field } from "./Field";

export const Signup: React.FunctionComponent = () => {
	return (
		<Form
			action="http://localhost:9000/signup"
			submissionProp={() => {
				console.log("submitted");
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
						label="Confirmation Password:"
						handleChange={handleChange}
					/>
				</React.Fragment>
			)}
		/>
	);
};
