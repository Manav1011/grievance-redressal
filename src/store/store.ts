import { configureStore } from '@reduxjs/toolkit';
import grievancesReducer from './grievancesSlice';
import languageReducer from './languageSlice';

export const store = configureStore({
  reducer: {
    grievances: grievancesReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
