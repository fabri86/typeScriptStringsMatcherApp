import axios from "axios";
import { StringMatchUserInput } from "../types/StringMatchUserInput";

const UrlBase = "http://localhost:1234/";
const isMatchApi = `${UrlBase}/isMatch`;

export const isMatch = (input: StringMatchUserInput) => {
  return axios.get(isMatchApi, {
    params: input,
  });
};
