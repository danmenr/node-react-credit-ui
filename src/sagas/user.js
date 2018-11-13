import { call, put } from "redux-saga/effects";
import { USER_LOGIN_SUCCESSFUL, USER_LOGIN_ERROR } from "constants/action-types";
import creditApi from "api";

export function* login(action){
    try {
        const response = yield call(creditApi.users.login, action.payload)
        yield put({
            type: USER_LOGIN_SUCCESSFUL,
            payload: response.data
        })
    }
    catch(error) {
        yield put({
            type: USER_LOGIN_ERROR,
            payload: error
        });
    }
}