import React, { Fragment } from "react";
import "./App.css";
import { getAllBasicUnicorns } from "./models/cards/BasicUnicorn";
import { Card } from "./features/card/Card";

function App() {
	const unicorns = getAllBasicUnicorns();
	const cards = unicorns.map((unicorn, i) => <Card key={i} card={unicorn} />);
	return <Fragment>{cards}</Fragment>;
}

export default App;
