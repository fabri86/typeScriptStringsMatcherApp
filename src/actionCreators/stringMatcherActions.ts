import { AxiosResponse } from "axios";
import { Dispatch } from "redux";
import { StringMatchUserInput } from "../types/StringMatchUserInput";

import {
  START_FETCH_IS_MATCH,
  FETCH_DID_SUCCEED,
  FETCH_DID_FAIL,
} from "../actions/actionTypes";

import * as api from "../api/index";
import { AppActions } from "../actions/actionTypes";

export const fetchIsMatch = (userInput: StringMatchUserInput) => {
  return async (dispatch: Dispatch<AppActions>) => {
    try {
      dispatch(startFetchingIsMatch());

      const response: AxiosResponse<boolean> = await api.isMatch(userInput);
      const isMatch: boolean = response.data;

      dispatch(fetchDidSucceed(isMatch));
    } catch (error) {
      dispatch(fetchDidFail());
    }
  };
};

const startFetchingIsMatch = (): AppActions => ({
  type: START_FETCH_IS_MATCH,
});

const fetchDidSucceed = (value: boolean): AppActions => ({
  type: FETCH_DID_SUCCEED,
  payload: { data: { isMatching: value } },
});

const fetchDidFail = (): AppActions => ({
  type: FETCH_DID_FAIL,
});
