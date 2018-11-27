import { call, put } from "redux-saga/effects";
import {
    CREDIT_SAVE_SUCCESSFUL,
    CREDIT_SAVE_ERROR,
    CREDIT_GET_SUCCESSFUL,
    CREDIT_GET_ERROR
 } from "constants/action-types";
import creditApi from "api";

export function* saveCredit(action){
    try {
        const response = yield call(creditApi.credits.saveCredit, action.payload)
        yield put({
            type: CREDIT_SAVE_SUCCESSFUL,
            payload: response.data
        })
    }
    catch(error) {
        yield put({
            type: CREDIT_SAVE_ERROR,
            payload: error
        });
    }
}

export function* getCredits(action){
    try {
       // const response = yield call(creditApi.credits.getCredits)

        yield put({
            type: CREDIT_GET_SUCCESSFUL,
            payload:  [
                {
                    "active": true,
                    "_id": "5be132bade5d2c7b78837fbc",
                    "name": "Lavadora",
                    "amount": 6900,
                    "payments": 15,
                    "paymentAmount": 460,
                    "creditOwner": "Liverpool",
                    "dateCreated": "2018-11-06T06:20:42.515Z",
                    "__v": 0
                }
            ]
        })
        // yield put({
        //     type: CREDIT_GET_SUCCESSFUL,
        //     payload: response.data
        // })
    }
    catch(error) {
        yield put({
            type: CREDIT_GET_ERROR,
            payload: error
        });
    }
}
