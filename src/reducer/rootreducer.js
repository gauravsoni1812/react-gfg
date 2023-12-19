import { combineReducers } from "redux";
import { countReducer } from "./countReducer";
import { userReducer } from "./userReducer";
export const rootreducer = combineReducers(
   {user: userReducer,
    count: countReducer}
)