import { IResponse } from "./response";

export interface ISuccessResponse extends Omit<IResponse, "codeAsString"> {
  data: any | [];
}