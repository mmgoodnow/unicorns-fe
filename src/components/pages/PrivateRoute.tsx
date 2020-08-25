import React, { ReactNode } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function PrivateRoute({ children, ...rest }: RouteProps) {
	const { isLoggedIn, isLoading } = useAuth();
	if (isLoading) return <h3>Loading…</h3>;
	return (
		<Route
			{...rest}
			render={({ location }) =>
				isLoggedIn ? (
					children
				) : (
					<Redirect to={{ pathname: "/login", state: { from: location } }} />
				)
			}
		/>
	);
}
