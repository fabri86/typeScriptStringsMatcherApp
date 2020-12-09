import { combineReducers } from "redux";
import { createStore, applyMiddleware, Store } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { AppActions } from "../actions/actionTypes";
import stringMatchReducer from "../reducers/StringsMatcherReducer";

export const rootReducer = combineReducers({
  stringMatchReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export const store: Store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<AppState, AppActions>)
);
