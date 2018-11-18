import { takeLatest } from "redux-saga/effects";
import { USER_LOGIN_REQUEST, USER_SIGNUP_REQUEST } from "constants/action-types";
import {login, signUp} from "./user";

export default function* creditSagas() {
  yield takeLatest(USER_LOGIN_REQUEST, login);
  yield takeLatest(USER_SIGNUP_REQUEST, signUp);
}