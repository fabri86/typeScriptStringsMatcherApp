import axios from "axios";
import { StringMatchUserInput } from "../types/StringMatchUserInput";

const UrlBase = "http://localhost:5000";
const isMatchApi = `${UrlBase}/ismatch`;

export const isMatch = (input: StringMatchUserInput) => {
  return axios.get(isMatchApi, {
    params: input,
  });
};
