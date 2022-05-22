import { Response } from "express";
import { SuccessResponse, ErrorResponse, ISuccessResponse } from "../utils";
import { StatusCodes } from "http-status-codes";

export abstract class RootController {
  protected successResponse(
    res: Response,
    success: ISuccessResponse,
  ): Response {
    return res
    .status(success.code || StatusCodes.OK)
    .send(SuccessResponse.sendResponse(success));
  }

  protected errorResponse(
    res: Response,
    error: any,
  ): Response {
    return res.status(error.code || StatusCodes.INTERNAL_SERVER_ERROR)
    .send(ErrorResponse.sendResponse(error));
  }
}