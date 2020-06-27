import * as React from "react";
import IValues from "./IValues";
import IErrors from "./IErrors";

interface IFormProps {
	action: string;

	/*
	 * This prop is used to render something or do some action once the form has
	 * been submitted.
	 */
	submissionAction: any;

	render: (handleChange: any) => React.ReactNode;
}

export interface IFormState {
	values: IValues;

	errors: IErrors;
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
		for (let key in errors) {
			if (errors[key].length > 0) return true;
		}
		return false;
	}

	private handleSubmit = async (
		e: React.FormEvent<HTMLFormElement>
	): Promise<void> => {
		e.preventDefault();

		if (this.validateForm()) {
			const submitSuccess: boolean = await this.submitForm();
			submitSuccess
				? this.props.submissionAction()
				: console.log("failed to submit");
		}
	};

	// TODO:: Implement this
	private validateForm(): boolean {
		return true;
	}

	// TODO:: Going to need to fix hardcoded user here
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
			.then((data: any) => {
				console.log("form submitted, return value", data);
				if (data.errors) {
					this.setState({ errors: data });
					console.log(this.state.errors);
				}
			})
			.catch((errors) => {
				console.log("api errors:", errors);
			});
		return true;
	}

	handleChange = (id: string, e: React.FormEvent<HTMLFormElement>): void => {
		this.setState({
			values: { ...this.state.values, [id]: e.currentTarget.value },
			errors: {},
		});
	};

	render() {
		const { errors } = this.state;

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
					{this.haveErrors(errors) && (
						<div className="alert alert-danger" role="alert">
							Sorry, this form is invalid. Please review, adjust and try again
						</div>
					)}
				</div>
			</form>
		);
	}
}
