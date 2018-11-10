import {
    AUTHENTICATION_LOGIN_REQUEST
  } from "constants/action-types";

export const login = credentials => {
    return { type: AUTHENTICATION_LOGIN_REQUEST, payload: credentials };
  };