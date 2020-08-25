import { post, get, del } from "./http";
import { LoginCredentials, SignupCredentials } from "../models/auth";

export function login(user: LoginCredentials) {
	return post("/login", { user });
}

export function logout() {
	return del("/logout");
}

export function signup(user: SignupCredentials) {
	return post("/signup", { user });
}

export function getCurrentUser() {
	return get("/logged_in");
}
