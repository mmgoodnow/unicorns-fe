import { RootState } from "../index";
import { User } from "../../models/auth";

export const userSelector = (state: RootState) => state.system.user as User;
export const authSelector = (state: RootState) => state.system;
