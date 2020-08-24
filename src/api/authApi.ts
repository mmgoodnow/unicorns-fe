import { post, get } from "./http";
import { LoginCredentials, SignupCredentials } from "../models/auth";

export function login(user: LoginCredentials) {
	return post("/login", { user });
}

export function logout() {
	return post("/logout");
}

export function signup(user: SignupCredentials) {
	return post("/signup", { user });
}

export function getCurrentUser() {
	return get("/logged_in");
}
