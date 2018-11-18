import {
    USER_LOGIN_REQUEST,
    USER_SIGNUP_REQUEST
  } from "constants/action-types";

export const login = credentials => {
    return { type: USER_LOGIN_REQUEST, payload: credentials };
  };

  export const signUp = userInfo => {
    return {type: USER_SIGNUP_REQUEST, payload: userInfo };
  }