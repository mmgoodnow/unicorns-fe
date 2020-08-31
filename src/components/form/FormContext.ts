import { createContext } from "react";
import { FieldEvent } from "./Field";

interface IFormContext {
	onChange: (id: string, event: FieldEvent) => any;
}

export const FormContext = createContext<IFormContext>({
	onChange: () => console.error("onChange not implemented"),
});
