import {
    USER_LOGIN_REQUEST
  } from "constants/action-types";

export const login = credentials => {
    return { type: USER_LOGIN_REQUEST, payload: credentials };
  };