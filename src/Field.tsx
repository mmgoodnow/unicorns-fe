import * as React from "react";
import IErros from "./IErrors";

type Editor = "textbox" | "multilinetextbox" | "dropdown";

export interface IFieldProps {
	id: string;

	label?: string;

	editor?: Editor;

	options?: string[];

	placeholder?: string;

	value?: any;

	type?: string;

	handleChange: any;
}

export const Field: React.FunctionComponent<IFieldProps> = ({
	id,
	label,
	editor,
	options,
	placeholder,
	value,
	type,
	handleChange,
}) => {
	return (
		<div className="form-group">
			{label && <label htmlFor={id}>{label}</label>}

			{editor!.toLowerCase() === "textbox" && (
				<input
					id={id}
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={(e: React.FormEvent<HTMLInputElement>) => {
						handleChange(id, e);
					}}
					onBlur={(e: React.FormEvent<HTMLInputElement>) => {
						handleChange(id, e);
					}}
					className="form-control"
				/>
			)}

			{editor!.toLowerCase() === "multilinetextbox" && (
				<textarea
					id={id}
					placeholder={placeholder}
					value={value}
					onChange={(e: React.FormEvent<HTMLTextAreaElement>) => {
						handleChange(id, e);
					}}
					onBlur={(e: React.FormEvent<HTMLTextAreaElement>) => {
						handleChange(id, e);
					}}
					className="form-control"
				/>
			)}

			{editor!.toLowerCase() === "dropdown" && (
				<select
					id={id}
					value={value}
					placeholder={placeholder}
					onChange={(e: React.FormEvent<HTMLSelectElement>) => {
						handleChange(id, e);
					}}
					onBlur={(e: React.FormEvent<HTMLSelectElement>) => {
						handleChange(id, e);
					}}
					className="form-control"
				>
					{options &&
						options.map((option) => (
							<option key={option} value={option}>
								{option}
							</option>
						))}
				</select>
			)}

			{/*TODO:: display validation error*/}
		</div>
	);
};

Field.defaultProps = {
	editor: "textbox",
};
