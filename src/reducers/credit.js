import { Map, List } from "immutable";
import {
  CREDIT_SAVE_SUCCESSFUL,
  CREDIT_GET_SUCCESSFUL
} from "constants/action-types";

const initialState = {
    creditCreated: Map(),
    credits: List()
}

export default (state = Map(initialState), action) => {
  switch (action.type) {
  case CREDIT_SAVE_SUCCESSFUL:
    return state.set('creditCreated', Map(action.payload));
  case CREDIT_GET_SUCCESSFUL:
    return state.set('credits', List(action.payload));
  default:
    return state
  }
}
