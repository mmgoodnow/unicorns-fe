import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/auth";

export function Play() {
	const handleLogout = useLogout();
	return (
		<>
			<Link className="btn btn-link" to="/account">
				Account
			</Link>
			<Link className="btn btn-link" to="/play">
				Play
			</Link>
			<button className="btn btn-link" onClick={handleLogout}>
				Logout
			</button>
		</>
	);
}
