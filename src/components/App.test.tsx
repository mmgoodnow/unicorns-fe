import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import configureAppStore from "../store";
import { App } from "./App";

const store = configureAppStore(undefined);
test("renders Welcome to Unicorns", () => {
	const { getByText } = render(
		<Provider store={store}>
			<App />
		</Provider>
	);

	expect(getByText("Welcome to Unicorns!")).toBeInTheDocument();
});
