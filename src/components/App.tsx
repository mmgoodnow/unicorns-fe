import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./home/Home";
import { Login } from "./login/Login";
import { Signup } from "./signup/Signup";
import { PrivateRoute } from "./pages/PrivateRoute";
import { Lobby } from "./pages/Lobby";

export function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/signup" component={Signup} />
				<PrivateRoute exact path="/lobby" component={Lobby} />
			</Switch>
		</BrowserRouter>
	);
}
