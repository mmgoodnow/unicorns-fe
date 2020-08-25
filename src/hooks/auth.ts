import { useDispatch, useSelector } from "react-redux";
import { authSelector } from "../store/system/selectors";
import { useEffect } from "react";
import { authenticate } from "../store/system/actions";

export function useAuth() {
	const dispatch = useDispatch();
	const { isLoggedIn, isLoading } = useSelector(authSelector);

	useEffect(() => {
		if (!isLoading && isLoggedIn === undefined) {
			dispatch(authenticate());
		}
	}, [dispatch, isLoading, isLoggedIn]);
	if (isLoggedIn === undefined) return { isLoading: true };
	return { isLoggedIn, isLoading };
}
