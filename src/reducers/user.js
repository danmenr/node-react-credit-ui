import { Map } from "immutable";
import {
  USER_LOGIN_SUCCESSFUL,
  USER_SIGNUP_SUCCESSFUL
} from "constants/action-types";
import { isNullOrUndefined } from "util";

const initialState = {
    user: Map(),
    loggedIn: false,
    userCreated: Map()
}

export default (state = Map(initialState), action) => {
  switch (action.type) {
  case USER_LOGIN_SUCCESSFUL:
    return state.set('user', Map(action.payload)).set('loggedIn', !isNullOrUndefined(action.payload.token));
  case USER_SIGNUP_SUCCESSFUL:
    return state.set('userCreated', Map(action.payload));
  default:
    return state
  }
}
