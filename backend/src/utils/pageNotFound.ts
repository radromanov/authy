import { NextFunction, Request, Response } from "express";
import { Exception } from "../core/Exception";

export const pageNotFound = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  console.log("Passing through `pageNotFound` func");
  const error = new Exception(
    `Page '${req.originalUrl}' not found.`,
    "Not Found"
  );

  next(error);
};
