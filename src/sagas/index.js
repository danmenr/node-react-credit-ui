import { takeLatest } from "redux-saga/effects";
import { AUTHENTICATION_LOGIN_REQUEST } from "constants/action-types";
import {login} from "sagas/Authentication";

export default function* creditSagas() {
  yield takeLatest(AUTHENTICATION_LOGIN_REQUEST, login);
}