import React, { useCallback } from "react";
import { logout } from "../../store/system/actions";
import { useDispatch, useSelector } from "react-redux";
import { userSelector } from "../../store/system/selectors";
import { User } from "../../models/auth";

export function Lobby() {
	const dispatch = useDispatch();
	const user: User = useSelector(userSelector);
	const handleLogout = useCallback(() => {
		dispatch(logout());
	}, [dispatch]);
	return (
		<div>
			You're logged in as {JSON.stringify(user)}
			<button className="btn btn-primary" onClick={handleLogout}>
				Logout
			</button>
		</div>
	);
}
