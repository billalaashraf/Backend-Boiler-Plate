import { StatusCodes } from "http-status-codes";
import { ISuccessResponse } from "../interfaces";

export class SuccessResponse {
  public static create(success: ISuccessResponse): ISuccessResponse {
    const response = {
      ...{
        message: 'Operation successful',
        userMessage: success.userMessage || 'Request completed successfully',
        code: success.code,
        success: true,
        data: success.data || []
      },
    };
    return response;
  }

  public static sendResponse(res: ISuccessResponse): ISuccessResponse {
    const response = {
      ...{
        code: StatusCodes.OK,
        message: res.message,
        userMessage: res.userMessage,
        data: res.data,
        success: true,
      },
    };
    return response;
  }
}