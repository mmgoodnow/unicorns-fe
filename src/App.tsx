import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import { Login } from "./Login";
import { Signup } from "./Signup";

interface IAppProps {}

interface IAppState {
	isLoggedIn: boolean;
	user: object;
}

class App extends React.Component<IAppProps, IAppState> {
	constructor(props: IAppProps) {
		super(props);
		this.state = {
			isLoggedIn: false,
			user: {},
		};
	}

	componentDidMount() {
		this.loginStatus();
	}

	handleLogin = (data: any): void => {
		this.setState({ isLoggedIn: true, user: data.user });
	};

	handleLogout = (): void => {
		this.setState({ isLoggedIn: false, user: {} });
	};

	loginStatus = (): void => {
		fetch("http://localhost:9000/logged_in", {
			method: "GET",
			credentials: "include",
		})
			.then((response: any) => {
				if (response.data.logged_in) {
					this.handleLogin(response);
				} else {
					this.handleLogout();
				}
			})
			.catch((error) => console.log("api errors", error));
	};

	render() {
		return (
			<div>
				<BrowserRouter>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/signup" component={Signup} />
					</Switch>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
