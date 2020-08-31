import * as React from "react";
import { useContext } from "react";
import { FormContext } from "./FormContext";
import { partial } from "lodash";
type Editor = "textbox" | "multilinetextbox" | "dropdown";
export type FieldEvent = React.FormEvent<
	HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
>;

export interface IFieldProps {
	id: string;

	label: string;

	editor?: Editor;

	options?: string[];

	placeholder?: string;

	value?: any;

	type?: string;
}

export const Field: React.FunctionComponent<IFieldProps> = ({
	id,
	label,
	editor = "textbox",
	options,
	placeholder,
	value,
	type,
}) => {
	const { onChange } = useContext(FormContext);
	const handleChange = partial(onChange, id);
	return (
		<div className="form-group">
			{label && <label htmlFor={id}>{label}</label>}

			{editor.toLowerCase() === "textbox" && (
				<input
					id={id}
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={handleChange}
					className="form-control"
				/>
			)}

			{editor.toLowerCase() === "multilinetextbox" && (
				<textarea
					id={id}
					placeholder={placeholder}
					value={value}
					onChange={handleChange}
					className="form-control"
				/>
			)}

			{editor.toLowerCase() === "dropdown" && (
				<select
					id={id}
					value={value}
					placeholder={placeholder}
					onChange={handleChange}
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
