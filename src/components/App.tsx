import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import { Login } from "./login/Login";
import { Signup } from "./signup/Signup";
import { SystemState } from "../store/system/types";
import { login, logout } from "../store/system/actions";
import { connect, ConnectedProps } from "react-redux";

interface IAppProps {}

const loginDispatch = {
	login,
	logout,
};

const loginState = (state: SystemState) => ({
	isLoggedIn: state.isLoggedIn,
	user: state.user,
});

const connector = connect(loginState, loginDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

class App extends React.Component<PropsFromRedux, SystemState> {
	componentDidMount() {
		this.loginStatus();
	}

	loginStatus = (): void => {
		fetch("http://localhost:9000/logged_in", {
			method: "GET",
			credentials: "include",
		})
			.then((response: any) => {
				response.json().then((json: any) => {
					if (json.logged_in) {
						let loginInfo: SystemState = {
							isLoggedIn: json.logged_in,
							user: json.user,
						};
						this.props.login(loginInfo);
					} else {
						this.props.logout();
					}
				});
			})
			.catch((error) => console.log("api errors", error));
	};

	handleLogin = (data: any): void => {
		if (data.logged_in) {
			let loginInfo: SystemState = {
				isLoggedIn: data.logged_in,
				user: data.user,
			};
			this.props.login(loginInfo);
		} else {
			console.log("login failed");
		}
	};

	handleLogout = (): void => {
		fetch("http://localhost:9000/logout", {
			method: "DELETE",
			credentials: "include",
		})
			.then((response: any) => {
				response.json().then((json: any) =>
					json.status === "ok"
						? () => {
								this.props.logout();
						  }
						: console.log("log out failed")
				);
			})
			.catch((error) => console.log("api errors", error));
		this.props.logout();
	};

	render() {
		return (
			<div>
				{!this.props.isLoggedIn && (
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
				{this.props.isLoggedIn && (
					<div>
						You're logged in as
						{JSON.stringify(this.props.user)}
						<button className="btn btn-primary" onClick={this.handleLogout}>
							Logout
						</button>
					</div>
				)}
			</div>
		);
	}
}

export default connector(App);
