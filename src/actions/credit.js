import {
    CREDIT_SAVE_REQUEST,
    CREDIT_GET_REQUEST
  } from "constants/action-types";

export const saveCredit = credit => {
    return { type: CREDIT_SAVE_REQUEST, payload: credit };
  };

export const getCredits = () => {
    return { type: CREDIT_GET_REQUEST };
  };