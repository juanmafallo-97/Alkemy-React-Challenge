import { combineReducers } from "redux";
import authReducer from "./authReducer";
import teamReducer from "./teamReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  heroes: teamReducer,
});

export default rootReducer;
