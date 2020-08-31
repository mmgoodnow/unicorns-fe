import React from "react";
import { getAllBasicUnicorns } from "../../models/cards/BasicUnicorn";
import { Card } from "../gameplay/Card";

export function Play() {
	const unicorns = getAllBasicUnicorns();
	const cards = unicorns.map((unicorn, i) => <Card key={i} card={unicorn} />);
	return (
		<>
			<h1>Play</h1>
			{cards}
		</>
	);
}
