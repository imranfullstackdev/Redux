import { combineReducers, createStore } from "redux";
import { authReducer } from "./reducers/authReducer";
import { modalReducer } from "./reducers/modalReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const reducers = combineReducers({
  authReducer, modalReducer
});
export const store = createStore(reducers, composeWithDevTools());
