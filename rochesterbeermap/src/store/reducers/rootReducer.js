import { combineReducers } from "redux";
import breweryReducer from "./breweryReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  brewery: breweryReducer,
  user: userReducer
});

export default rootReducer;
