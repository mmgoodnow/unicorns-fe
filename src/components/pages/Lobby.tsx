import React, { useCallback } from "react";
import { logout } from "../../store/system/actions";
import { useDispatch } from "react-redux";

export function Lobby() {
	const dispatch = useDispatch();
	const handleLogout = useCallback(() => {
		dispatch(logout());
	}, [dispatch]);
	return (
		<div>
			You're in the lobby.
			<button className="btn btn-primary" onClick={handleLogout}>
				Logout
			</button>
		</div>
	);
}
