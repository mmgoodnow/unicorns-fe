import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./home/Home";
import { Login } from "./login/Login";
import { Signup } from "./signup/Signup";
import { PrivateRoute } from "./pages/PrivateRoute";
import { Lobby } from "./pages/Lobby";
import { Play } from "./pages/Play";
import { Account } from "./pages/Account";
import { Navbar } from "./pages/Navbar";

export function App() {
	return (
		<BrowserRouter>
			<div className="bg-light w-100 h-100">
				<Navbar />
				<div
					className="container w-100 h-100"
					style={{ overflowY: "scroll", wordWrap: "break-word" }}
				>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/signup" component={Signup} />
						<PrivateRoute exact path="/lobby" component={Lobby} />
						<PrivateRoute exact path="/play" component={Play} />
						<PrivateRoute exact path="/account" component={Account} />
					</Switch>
				</div>
			</div>
		</BrowserRouter>
	);
}
