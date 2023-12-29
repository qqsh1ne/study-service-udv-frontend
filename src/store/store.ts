import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { authReducer } from '../screens/Login/model/slices/authSlice.ts';
import { api } from '../services/api.ts';
import { listenerMiddleware } from '../screens/Login/model/middleware/auth.ts';
import { applicationReducer } from '../screens/CreateApplication/model/slices/applicationSlice.ts';
import { reducer as applicationListReducer } from './slices/applicationList.slice.ts';
import { coursesReducer } from './slices/CoursesSlice/coursesSlice.ts';

const rootReducer = combineReducers({
	[api.reducerPath]: api.reducer,
	auth: authReducer,
	application: applicationReducer,
	applicationList: applicationListReducer,
	courses: coursesReducer
});

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware()
				.concat(api.middleware)
				.prepend(listenerMiddleware.middleware)
	});
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
export type AppStore = ReturnType<typeof setupStore>;
