import * as React from "react";
import IValues from "./IValues";
import IErrors from "./IErrors";

interface IFormProps {
	action: string;

	/*
	 * This prop is used to render something or do some action once the form has
	 * been submitted.
	 */
	submissionProp: any;

	render: (handleChange: any) => React.ReactNode;
}

export interface IFormState {
	values: IValues;

	errors: IErrors;

	submitSuccess?: boolean;
}

export default class Form extends React.Component<IFormProps, IFormState> {
	constructor(props: IFormProps) {
		super(props);

		const values: IValues = {};
		const errors: IErrors = {};
		this.state = {
			values,
			errors,
		};
	}

	private haveErrors(errors: IErrors) {
		let haveError: boolean = false;
		Object.keys(errors).map((key: string) => {
			if (errors[key].length > 0) {
				haveError = true;
			}
		});
		return haveError;
	}

	private handleSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	): Promise<void> => {
		e.preventDefault();

		if (this.validateForm()) {
			const submitSuccess: boolean = await this.submitForm();
			this.setState({ submitSuccess });
		}
	};

	handleChange = (id: string, e: React.FormEvent<HTMLFormElement>): void => {
		this.setState({
			values: { ...this.state.values, [id]: e.currentTarget.value },
		});
	};

	// TODO:: Implement this
	private validateForm(): boolean {
		return true;
	}

	private submitForm(): boolean {
		let user = { user: { ...this.state.values } };
		fetch(this.props.action, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			body: JSON.stringify(user),
		})
			.then((response: any) => response.json())
			.then((data: any) => console.log(data))
			.catch((error) => console.log("api errors:", error));
		return true;
	}

	render() {
		const { submitSuccess, errors } = this.state;

		return (
			<form onSubmit={this.handleSubmit} noValidate={true}>
				<div className="container">
					{this.props.render(this.handleChange.bind(this))}
					<div className="form-group">
						<button
							type="submit"
							className="btn btn-primary"
							disabled={this.haveErrors(errors)}
						>
							Submit
						</button>
					</div>
					{submitSuccess && this.props.submissionProp()}
					{submitSuccess === false && !this.haveErrors(errors) && (
						<div className="alert alert-danger" role="alert">
							Sorry, an unexcpected error has occurred
						</div>
					)}
					{submitSuccess === false && this.haveErrors(errors) && (
						<div className="alert alert-danger" role="alert">
							Sorry, this form is invalid. Please review, adjust and try again
						</div>
					)}
				</div>
			</form>
		);
	}
}
