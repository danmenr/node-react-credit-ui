import { call, put } from "redux-saga/effects";
import { USER_LOGIN_SUCCESSFUL, USER_LOGIN_ERROR } from "constants/action-types";
import creditApi from "api";

export function* login(action){
    const { response, error } = yield call(creditApi.users.login, action.payload);
    if(response)
        yield put({
            type: USER_LOGIN_SUCCESSFUL,
            payload: response
        })
    else
        yield put({
            type: USER_LOGIN_ERROR,
            payload: error
        });
}