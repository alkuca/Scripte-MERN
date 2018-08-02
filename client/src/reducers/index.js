import {combineReducers} from "redux";
import postReducer from "./personReducer"

export default combineReducers({
    persons: postReducer
})