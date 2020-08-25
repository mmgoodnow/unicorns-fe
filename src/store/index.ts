import {
	configureStore,
	ThunkAction,
	Action,
	getDefaultMiddleware,
	combineReducers,
} from "@reduxjs/toolkit";
import { systemReducer } from "./system/reducer";

const rootReducer = combineReducers({ system: systemReducer });

export default function configureAppStore(preloadedState: any) {
	return configureStore({
		reducer: rootReducer,
		middleware: [...getDefaultMiddleware()],
		preloadedState,
	});
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
