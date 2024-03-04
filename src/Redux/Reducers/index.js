import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import userReducer from "./UserReducer";

const AllReducers = combineReducers({
    counterReducer,
    userReducer,
});

export default AllReducers;
