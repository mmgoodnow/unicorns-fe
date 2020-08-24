import React, { ReactNode } from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

interface IPrivateRouteProps {
	children: ReactNode;
}
export function PrivateRoute({ children, ...rest }: IPrivateRouteProps) {
	const { isLoggedIn } = useAuth();
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
