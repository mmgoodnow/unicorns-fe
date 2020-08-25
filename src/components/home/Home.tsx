import React from "react";
import { Link } from "react-router-dom";

export const Home = () => (
	<div>
		<div className="text-center">
			<h2>Welcome to Unicorns!</h2>
		</div>
		<div className="container">
			<div className="col-6 justify-content-center mx-auto align-middle">
				<Link className="btn btn-block btn-primary" to="/login">
					Log In
				</Link>
				<br />
				<Link className="btn btn-block btn-success" to="/signup">
					Sign Up
				</Link>
			</div>
		</div>
	</div>
);
