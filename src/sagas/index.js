import { takeLatest } from "redux-saga/effects";
import {
  USER_LOGIN_REQUEST,
  USER_SIGNUP_REQUEST,
  CREDIT_SAVE_REQUEST,
  CREDIT_GET_REQUEST
} from "constants/action-types";
import {login, signUp} from "./user";
import {saveCredit, getCredits } from "./credit";

export default function* creditSagas() {
  yield takeLatest(USER_LOGIN_REQUEST, login);
  yield takeLatest(USER_SIGNUP_REQUEST, signUp);
  yield takeLatest(CREDIT_SAVE_REQUEST, saveCredit);
  yield takeLatest(CREDIT_GET_REQUEST, getCredits);
}