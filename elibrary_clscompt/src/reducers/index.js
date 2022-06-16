import { combineReducers } from "redux";
import users from './user';

const rootReducers = combineReducers({
     users:users
})

export default rootReducers;