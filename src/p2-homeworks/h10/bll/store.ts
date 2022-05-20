import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { themeReducer } from "../../h12/bll/themeReducer";
import { loadingReducer } from "./loadingReducer";

const rootReducers = combineReducers({
  loading: loadingReducer,
  themeSwitch: themeReducer,
});

export const store = configureStore({
  reducer: rootReducers,
});

export type RootStateType = ReturnType<typeof store.getState>;

// // @ts-ignore
// window.store = store // for dev
