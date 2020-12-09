import {
  START_FETCH_IS_MATCH,
  FETCH_DID_SUCCEED,
  FETCH_DID_FAIL,
  StringMatherActionTypesWithPayload,
  isActionTypeWithPayload,
} from "../actions/actionTypes";
import { AppState } from "../types/AppState";
import { AppActions } from "../actions/actionTypes";

export const InitialState: AppState = {
  isChecking: false,
  isMatching: false,
};

const StringMatchReducer = (
  state: AppState = InitialState,
  action: AppActions
) => {
  switch (action.type) {
    case START_FETCH_IS_MATCH:
      return {
        ...state,
        isChecking: true,
      };
    case FETCH_DID_SUCCEED:
      return {
        ...state,
        isChecking: false,
        isMatching: isActionTypeWithPayload(action)
          ? (action as StringMatherActionTypesWithPayload).payload.data
          : false,
      };
    case FETCH_DID_FAIL: {
      return {
        ...state,
        isChecking: false,
        isMatching: false,
      };
    }
    default:
      return state;
  }
};

export default StringMatchReducer;
