import React from "react";
import { userSelector } from "../../store/system/selectors";
import { useSelector } from "react-redux";

export function Account() {
	const user = useSelector(userSelector);
	return (
		<>
			<h1>Account</h1>
			<pre>{JSON.stringify(user, null, "\t")}</pre>
		</>
	);
}
