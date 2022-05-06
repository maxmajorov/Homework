import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loadingReducer } from "./loadingReducer";

const rootReducers = combineReducers({
  loading: loadingReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;

// // @ts-ignore
// window.store = store // for dev
