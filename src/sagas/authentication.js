import { call, put } from "redux-saga/effects";
import { AUTHENTICATION_LOGIN_SUCCESSFUL, AUTHENTICATION_LOGIN_ERROR } from "constants/action-types";
import Api from "api";

export function* login(action){
    const { response, error } = yield call(Api.post(`users/login`,{params:action.payload}));
    if(response)
        yield put({
            type: AUTHENTICATION_LOGIN_SUCCESSFUL,
            payload: response
        })
    else
        yield put({
            type: AUTHENTICATION_LOGIN_ERROR,
            payload: error
        });
}