interface LocalizationService {
  firstStringLabel: string;
  secondStringLabel: string;
  testMatchBtnLabel: string;
  testMatchResultTxt: (result: boolean | string) => string;
}

const localizationStrings: LocalizationService = {
  firstStringLabel: "First string",
  secondStringLabel: "Second string",
  testMatchBtnLabel: "Test match",
  testMatchResultTxt: (result) =>
    `The value returned from the match is ${result}`,
};

export default localizationStrings;
