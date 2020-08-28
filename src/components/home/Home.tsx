import React from "react";
import { Link } from "react-router-dom";
import { Centered } from "../pages/Centered";

export const Home = () => (
	<Centered>
		<h1 className="ostrich title text-center">Unstable Unicorns</h1>
		<br />
		<Link className="btn btn-block btn-magical-unicorn text-light" to="/login">
			Log In
		</Link>
		<Link className="btn btn-block btn-basic-unicorn text-light" to="/signup">
			Sign Up
		</Link>
	</Centered>
);
