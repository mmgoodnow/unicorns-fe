import { post } from "./http";
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
