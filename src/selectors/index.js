import { createSelector } from "reselect";

const userReducer = state => state.get("user");

export const selectUserLogged = createSelector([userReducer], user => {
  return user.get("userLogged").toJS();
});

export const selectUserCreated = createSelector([userReducer], user => {
  return user.get("userCreated").toJS();
});

const creditReducer = state => state.get("credit");

export const selectCreditCreated = createSelector([creditReducer], credit => {
  return credit.get("creditCreated").toJS();
})

export const selectCredits = createSelector([creditReducer], credit => {
  return credit.get("credits").toArray();
})