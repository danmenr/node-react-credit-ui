import { Map } from "immutable";
import { AUTHENTICATION_LOGIN_SUCCESSFUL } from "constants/actionTypes";

const initialState = {
    userLogged: Map()
}

export default (state = Map(initialState), action) => {
  switch (action.type) {

  case AUTHENTICATION_LOGIN_SUCCESSFUL:
    return state.
  default:
    return state
  }
}
