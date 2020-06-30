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
				response.json().then((json: any) => {
					json.logged_in ? this.handleLogin(json) : this.handleLogout();
				});
			})
			.catch((error) => console.log("api errors", error));
	};

	login = (data: any): void => {
		data.logged_in ? this.handleLogin(data) : console.log("login failed");
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
						  }
						: console.log("log out failed")
				);
			})
			.catch((error) => console.log("api errors", error));
		this.handleLogout();
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
									render={(props) => (
										<Login loginStatus={this.loginStatus.bind(this)} />
									)}
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
						<button className="btn btn-primary" onClick={this.logout}>
							Logout
						</button>
					</div>
				)}
			</div>
		);
	}
}

export default App;
