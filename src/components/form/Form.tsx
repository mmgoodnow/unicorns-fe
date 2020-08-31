import * as React from "react";
import { IErrors, IValues } from "./types";

interface IFormProps {
	onSubmit: (data: any) => Promise<any>;
	/*
	 * This prop is used to some action once the form has
	 * been submitted successfully.
	 */
	onSuccess: (data: any) => any;
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

	private hasErrors() {
		const { errors } = this.state;
		for (let key in errors) {
			if (errors[key].length > 0) return true;
		}
		return false;
	}

	private handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (!this.validateForm()) return;

		this.props
			.onSubmit(this.state.values)
			.then((data: any) => {
				if (data.errors) {
					this.setState({ errors: data.errors });
					return;
				}
				return data;
			})
			.then(this.props.onSuccess)
			.catch((error: any) => {
				console.error("api errors:", error);
			});
	};

	// TODO:: Implement this
	private validateForm(): boolean {
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
							disabled={this.hasErrors()}
						>
							Submit
						</button>
					</div>
					{this.hasErrors() && (
						<div className="alert alert-danger" role="alert">
							Sorry, this form is invalid. Please review, adjust and try again:
							{errors}
						</div>
					)}
				</div>
			</form>
		);
	}
}
