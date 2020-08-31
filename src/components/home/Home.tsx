import React from "react";
import { Link } from "react-router-dom";
import { Centered } from "../pages/Centered";

export const Home = () => (
	<Centered>
		<h1 className="ostrich title text-center">Unstable Unicorns</h1>
		<Link className="btn btn-block btn-magical-unicorn text-light" to="/login">
			Log in
		</Link>
		<Link className="btn btn-block btn-basic-unicorn text-light" to="/signup">
			Sign up
		</Link>
	</Centered>
);
