import searchReducer from "./searchReducer";
import { combineReducers } from "redux";
import breweryReducer from "./breweryReducer";

const rootReducer = combineReducers({
    search: searchReducer,
    brewery: breweryReducer
});

export default rootReducer;