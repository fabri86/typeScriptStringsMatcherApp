import { StringMatchUserInput } from "../src/types/StringMatchUserInput";
import { Request, Response } from "express";

var express = require("express");
var app = express();

const stringMatcher = require("./stringMatcher");
const logger = require("./logger");

const port = process.env.PORT || 5000;
const isMatchEndPoint: string = "ismatch";

interface UserRequest extends Request {
  userInput: StringMatchUserInput;
}

app.get(
  `/${isMatchEndPoint}`,
  function (request: UserRequest, response: Response) {
    console.log("");
    console.log("New string match test...");

    const { query: userInput } = request;
    const isMatchResult = stringMatcher(userInput.string1, userInput.string2);

    logger(userInput.string1, userInput.string2, isMatchResult);
    response.send(isMatchResult);
  }
);

app.listen(port, function () {
  console.log(`string-matcher server listening on port ${port}...`);
});
