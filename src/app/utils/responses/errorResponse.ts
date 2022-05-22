import { IError, IErrorResponse } from "../interfaces";
import { StatusCodes } from "http-status-codes";
import { SERVER_ERROR} from "../constants";

export class ErrorResponse {
  public static format(error:any, errorModule:IError = SERVER_ERROR):IErrorResponse {
    const message = error.message ?
      error.message :
      Array.isArray(error) && error[0].message ?
      error[0].message :
      errorModule.message;
    return {
      ...{
        message: message,
        code: error.code || errorModule.code || 500,
        error: (error.message && error.code) || 
          (Array.isArray(error) && error[0].message && error[0].code) ?
          error : errorModule
      },
      ...(error.documentation && { documentation: error.documentation }),
      ...(error.description && { description: error.description }), 
    }
  }

  public static sendResponse(res: IErrorResponse) {
    return {
      ...{
        success: res.success,
        message: res.message,
        status: res.code === StatusCodes.BAD_REQUEST
            ? StatusCodes.BAD_REQUEST
            : StatusCodes.INTERNAL_SERVER_ERROR,
        error: res.error ? res.error : {},
      }
    }
  }
}