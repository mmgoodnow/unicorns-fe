import * as React from "react";
import { IErrors, IValues } from "./types";
import { ReactNode } from "react";
import { FormContext } from "./FormContext";
import { FieldEvent } from "./Field";

interface IFormProps {
	onSubmit: (data: any) => Promise<any>;
	/*
	 * This prop is used to some action once the form has
	 * been submitted successfully.
	 */
	onSuccess: (data: any) => any;
	children: ReactNode;
}

export interface IFormState {
	values: IValues;
	errors: IErrors;
}
const EMPTY_ERRORS = { root: [], fields: {} };

export default class Form extends React.Component<IFormProps, IFormState> {
	constructor(props: IFormProps) {
		super(props);
		const values: IValues = {};
		const errors: IErrors = EMPTY_ERRORS;
		this.state = {
			values,
			errors,
		};
	}

	private hasErrors() {
		const {
			errors: { root, fields },
		} = this.state;
		if (root.length) return true;
		for (let key in fields) {
			if (fields[key]) return true;
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
					this.setState((state) => ({
						errors: { ...state.errors, root: data.errors },
					}));
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
		return !this.hasErrors();
	}

	handleChange = (id: string, e: FieldEvent): void => {
		this.setState({
			values: { ...this.state.values, [id]: e.currentTarget.value },
			errors: EMPTY_ERRORS,
		});
	};

	render() {
		const {
			errors: { root: rootErrors },
		} = this.state;
		return (
			<form onSubmit={this.handleSubmit} noValidate={true}>
				{this.hasErrors() && (
					<div className="alert alert-instant" role="alert">
						Sorry, this form is invalid. Please review, adjust and try again:
						<ul>
							{rootErrors.map((err) => (
								<li>{err}</li>
							))}
						</ul>
					</div>
				)}
				<FormContext.Provider value={{ onChange: this.handleChange }}>
					{this.props.children}
				</FormContext.Provider>
				<button
					type="submit"
					className="btn btn-basic-unicorn btn-block"
					disabled={this.hasErrors()}
				>
					Submit
				</button>
			</form>
		);
	}
}
