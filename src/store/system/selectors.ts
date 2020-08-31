import { RootState } from "../index";

export const userSelector = (state: RootState) => state.system.user;
export const isLoggedInSelector = (state: RootState) => state.system.isLoggedIn;
export const authSelector = (state: RootState) => state.system;
