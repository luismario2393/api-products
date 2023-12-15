import { Request, Response, NextFunction } from "express";
import { UsersModel } from "../models";
import handleHttpError from "../utils/handleError";
import { verifyToken } from "../utils/handleToken";

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.headers.authorization) {
      handleHttpError(res, "NEED_SESSION", 401);
      return;
    }

    const token = req.headers.authorization.split(" ").pop();
    const dataToken = await verifyToken(token);

    if (!dataToken) {
      handleHttpError(res, "NOT_PAYLOAD_DATA", 401);
      return;
    }

    const user = await UsersModel.findOne({ _id: dataToken._id });
    req.body.user = user;

    next();
  } catch (error) {
    handleHttpError(res, "NOT_SESSION", 401);
  }
};
