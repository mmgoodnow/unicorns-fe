import React from "react";
import { userSelector } from "../../store/system/selectors";
import { useSelector } from "react-redux";

export function Account() {
	const user = useSelector(userSelector);
	return (
		<>
			Your Account
			<pre>{JSON.stringify(user, null, "\t")}</pre>
		</>
	);
}
