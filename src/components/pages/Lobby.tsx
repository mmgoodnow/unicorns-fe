import React, { useCallback } from "react";
import { logout } from "../../store/system/actions";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../store/system/selectors";
import { User } from "../../models/auth";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/auth";

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
	const handleLogout = useLogout();
	return (
		<div>
			<h1>{greet(user.username)}</h1>
			<Link className="btn btn-link" to="/account">
				Account
			</Link>
			<Link className="btn btn-link" to="/play">
				Play
			</Link>
			<button className="btn btn-link" onClick={handleLogout}>
				Logout
			</button>
		</div>
	);
}
