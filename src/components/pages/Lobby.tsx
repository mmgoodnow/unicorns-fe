import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "../../store/system/selectors";
import { User } from "../../models/auth";

function greet(name: string) {
	const hour = new Date().getHours();
	return hour < 12
		? `Good morning, ${name}!`
		: hour < 18
		? `Good afternoon, ${name}!`
		: `Good evening, ${name}!`;
}

export function Lobby() {
	const user: User = useSelector(userSelector);
	return (
		<>
			<h1>{greet(user.username)} You are in the lobby.</h1>
		</>
	);
}
