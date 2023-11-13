import { NextFunction, Request, Response } from "express";
import { Exception } from "../core/Exception";

/**
 * @todo Add different responses based on the `NODE_ENV` to provide more or less information
 */
export const globalErrorHandler = (
  error: Exception,
  _req: Request,
  res: Response,
  _next: NextFunction
) =>
  res
    .status(error.status)
    .json({ message: error.message, type: error.type, status: error.status });
