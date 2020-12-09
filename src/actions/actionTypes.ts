import { ActionPayload } from "../types/ActionPayload";

export const START_FETCH_IS_MATCH: string = "START_FETCH_IS_MATCH";
export const FETCH_DID_SUCCEED: string = "FETCH_DID_SUCCEED";
export const FETCH_DID_FAIL: string = "FETCH_DID_FAIL";

const payloadProp: string = "payload";

export interface StartFetchingIsMatch {
  type: typeof START_FETCH_IS_MATCH;
}

export interface FetchIsMatchDidSucceed {
  type: typeof FETCH_DID_SUCCEED;
  payload: ActionPayload;
}

export interface FetchIsMatchDidFail {
  type: typeof FETCH_DID_FAIL;
}

export type StringMatherActionTypesWithPayload = FetchIsMatchDidSucceed;

export type StringMatcherActionTypesWithoutPayload =
  | StartFetchingIsMatch
  | FetchIsMatchDidFail;

export type AppActions =
  | StringMatherActionTypesWithPayload
  | StringMatcherActionTypesWithoutPayload;

export const isActionTypeWithPayload = (actionType: AppActions): boolean => {
  return payloadProp in actionType;
};
