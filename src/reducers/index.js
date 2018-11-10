import { combineReducers } from "redux-immutable";
import user from "reducers/user";

const rootReducer = combineReducers({
    user
});

export default rootReducer;
