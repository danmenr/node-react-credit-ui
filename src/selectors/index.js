import { createSelector } from "reselect";

const userReducer = state => state.get("user");

export const selectUserLogged = createSelector([userReducer], user => {
  return user.get("userLogged").toJS();
});

export const selectUserCreated = createSelector([userReducer], user => {
  return user.get("userCreated").toJS();
});