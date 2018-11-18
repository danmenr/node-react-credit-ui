import { Map } from "immutable";
import {
  USER_LOGIN_SUCCESSFUL,
  USER_SIGNUP_SUCCESSFUL
} from "constants/action-types";

const initialState = {
    userLogged: Map(),
    userCreated: Map()
}

export default (state = Map(initialState), action) => {
  switch (action.type) {
  case USER_LOGIN_SUCCESSFUL:
    return state.set('userLogged', Map(action.payload));
  case USER_SIGNUP_SUCCESSFUL:
    return state.set('userCreated', Map(action.payload));
  default:
    return state
  }
}
