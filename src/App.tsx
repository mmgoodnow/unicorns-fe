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
		console.log("Data", data);
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
				response.json().then((json: any) => {
					console.log(json);
					json.logged_in ? this.handleLogin(response) : this.handleLogout();
				});
			})
			.catch((error) => console.log("api errors", error));
	};

	login = (): void => {
		fetch("http://localhost:9000/login", {
			method: "POST",
			credentials: "include",
		})
			.then((response: any) => {
				response.json().then((json: any) =>
					json.logged_in
						? () => {
								this.handleLogin(json);
								console.log("logged in");
						  }
						: console.log("login failed")
				);
			})
			.catch((error) => console.log("api errors", error));
	};

	logout = (): void => {
		fetch("http://localhost:9000/logout", {
			method: "DELETE",
			credentials: "include",
		})
			.then((response: any) => {
				response.json().then((json: any) =>
					json.status === "ok"
						? () => {
								this.handleLogout();
								console.log("logged out");
						  }
						: console.log("log out failed")
				);
			})
			.catch((error) => console.log("api errors", error));
	};

	render() {
		return (
			<div>
				{!this.state.isLoggedIn && (
					<div>
						<BrowserRouter>
							<Switch>
								<Route exact path="/" component={Home} />
								<Route
									exact
									path="/login"
									render={(props) => <Login login={this.login.bind(this)} />}
								/>
								<Route exact path="/signup" component={Signup} />
							</Switch>
						</BrowserRouter>
					</div>
				)}
				{this.state.isLoggedIn && (
					<div>
						You're logged in as
						{JSON.stringify(this.state.user)}
						<button onClick={this.logout}>Logout</button>
					</div>
				)}
			</div>
		);
	}
}

export default App;
