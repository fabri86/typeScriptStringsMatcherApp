const isMatch = (string1: string, string2: string): boolean => {
  // Sorting for better human understanding during the DEMO
  const sorted1 = string1.split("").sort().join("");
  const sorted2 = string2.split("").sort().join("");
  console.log("sorted string 1 has value ", sorted1);
  console.log("sorted string 2 has value ", sorted2);
  console.log("");

  const isMatch2 = isStr2IncludedInString1(sorted1, sorted2);
  return isMatch2;
};

const isStr2IncludedInString1 = (string1: string, string2: string): boolean => {
  const str1Map = toOccurrenciesMap(string1);
  const str2Map = toOccurrenciesMap(string2);

  console.log("string1 occurrrencies map is: ", str1Map);
  console.log("string2 occurrencies map is ", str2Map);

  return Object.keys(str2Map).every((key) => {
    if (!!str1Map[key]) {
      return str2Map[key] <= str1Map[key];
    }

    return false;
  });
};

const toOccurrenciesMap = (input: string): any => {
  return input
    .split("")
    .reduce(
      (res: any, char: string) => ((res[char] = (res[char] || 0) + 1), res),
      {}
    );
};

module.exports = isMatch;
