import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth, useLogout } from "../../hooks/auth";

export function Navbar() {
	const handleLogout = useLogout();
	const { isLoggedIn } = useAuth();
	if (!isLoggedIn) return null;
	return (
		<nav className="navbar navbar-expand-lg navbar-dark py-1 bg-basic-unicorn">
			<NavLink className="navbar-brand" activeClassName="active" to="/">
				Unstable Unicorns
			</NavLink>
			<div className="flex-grow-1" />
			<ul className="navbar-nav mr-auto">
				<li className="nav-item">
					<NavLink className="nav-link" activeClassName="active" to="/lobby">
						Lobby
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" activeClassName="active" to="/play">
						Play
					</NavLink>
				</li>
				<li className="nav-item">
					<NavLink className="nav-link" activeClassName="active" to="/account">
						Account
					</NavLink>
				</li>
				<li className="nav-item">
					<button className="btn btn-link nav-link" onClick={handleLogout}>
						Logout
					</button>
				</li>
			</ul>
		</nav>
	);
}
