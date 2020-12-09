import React, { useState } from "react";
import { connect } from "react-redux";
import { isUndefined } from "lodash";
import StringInput from "../components/StringInput";
import { fetchIsMatch } from "../actionCreators/stringMatcherActions";
import { ThunkDispatch } from "redux-thunk";
import { AppState } from "../types/AppState";
import { AppActions } from "../actions/actionTypes";
import locService from "../localization/appLabels";

interface MapStateProps {
  isMatching: boolean;
  isChecking: boolean;
}

interface MapDispatchProps {
  isMatch: (string1: string, string2: string) => void;
}

type StringsMatcherProps = MapStateProps & MapDispatchProps;

const mapStateToProps = (state: AppState): MapStateProps => ({
  isMatching: state.isMatching,
  isChecking: state.isChecking,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>) => ({
  isMatch: (string1: string, string2: string) =>
    dispatch(fetchIsMatch({ string1, string2 })),
});

const StringsMatcher: React.FC<StringsMatcherProps> = ({
  isMatch,
  isMatching,
  isChecking,
}) => {
  const [string1, setString1] = useState("");
  const [string2, setString2] = useState("");

  return (
    <>
      <div>
        <StringInput
          label={locService.firstStringLabel}
          onInputChangeCb={(e) => {
            setString1(e.target.value);
          }}
        ></StringInput>
        <StringInput
          label={locService.secondStringLabel}
          onInputChangeCb={(e) => {
            setString2(e.target.value);
          }}
        ></StringInput>
        <button
          onClick={() => {
            isMatch(string1, string2);
          }}
        >
          {locService.testMatchBtnLabel}
        </button>
      </div>
      {!isChecking && !isUndefined(isMatching) && (
        <div>{locService.testMatchResultTxt(isMatching)}</div>
      )}
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(StringsMatcher);
