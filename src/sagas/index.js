import { takeLatest } from "redux-saga/effects";
import { USER_LOGIN_REQUEST } from "constants/action-types";
import {login} from "./user";

export default function* creditSagas() {
  yield takeLatest(USER_LOGIN_REQUEST, login);
}