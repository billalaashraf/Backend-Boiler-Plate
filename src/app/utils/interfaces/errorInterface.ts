import { IResponse } from "./response";
import { IError } from "./error";

export interface IErrorResponse extends Omit<IResponse, "codeAsString" | "userMessage"> {
  error: IError | IError[];
}