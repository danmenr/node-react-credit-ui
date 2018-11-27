import { combineReducers } from "redux-immutable";
import user from "reducers/user";
import credit from "reducers/credit";

const rootReducer = combineReducers({
    user,
    credit
});

export default rootReducer;
