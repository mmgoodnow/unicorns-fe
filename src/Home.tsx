import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<div className="text-center">
				<h2>Welcome to Unicorns!</h2>
			</div>
			<div className="container">
				<div className="col-6 justify-content-center mx-auto">
					<Link className="btn btn-block btn-primary" to="/login">
						Log In
					</Link>
					<br></br>
					<Link className="btn btn-block btn-success" to="/signup">
						Sign Up
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
