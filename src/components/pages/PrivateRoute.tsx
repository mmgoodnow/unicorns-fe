import React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function PrivateRoute(props: RouteProps) {
	const { children, component, ...rest } = props;
	const { isLoggedIn, isLoading } = useAuth();
	if (isLoading) return <h3>Loading…</h3>;

	if (!isLoggedIn) {
		let render: RouteProps["render"] = ({ location }) => (
			<Redirect to={{ pathname: "/login", state: { from: location } }} />
		);
		return <Route {...rest} render={render} />;
	}

	return <Route {...props} />;
}
