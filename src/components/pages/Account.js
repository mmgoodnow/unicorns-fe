import React from "react";
import { userSelector } from "../../store/system/selectors";
import { useSelector } from "react-redux";

export function Account() {
	const user = useSelector(userSelector);
	return (
		<>
			Your Account
			{JSON.stringify(user)}
		</>
	);
}
