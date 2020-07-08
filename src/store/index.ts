import {
	configureStore,
	ThunkAction,
	Action,
	getDefaultMiddleware,
} from "@reduxjs/toolkit";
import { systemReducer } from "./system/reducers";

export default function configureAppStore(preloadedState: any) {
	return configureStore({
		reducer: systemReducer,
		middleware: [...getDefaultMiddleware()],
		preloadedState,
	});
}

export type RootState = ReturnType<typeof systemReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
