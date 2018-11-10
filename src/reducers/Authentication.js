import { Map } from "immutable";
import { AUTHENTICATION_LOGIN_SUCCESSFUL } from "constants/action-types";

const initialState = {
    userLogged: Map()
}

export default (state = Map(initialState), action) => {
  switch (action.type) {
  case AUTHENTICATION_LOGIN_SUCCESSFUL:
    return state.set('userLogged', Map(action.payload));
  default:
    return state
  }
}
