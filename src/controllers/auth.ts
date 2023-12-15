import { Request, Response } from "express";
import { UsersModel } from "../models";
import handleHttpError from "../utils/handleError";
import { tokenSign } from "../utils/handleToken";

export const registerCtrl = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const dataUser = await UsersModel.create(body);
    const data = {
      token: await tokenSign(dataUser),
      user: dataUser,
    };

    res.send({ data });
  } catch (error) {
    console.log({ error });
    handleHttpError(res, "ERROR_REGISTER");
  }
};

export const loginCtrl = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    const user = await UsersModel.findOne({ email });

    if (!user) {
      handleHttpError(res, "USER_NOT_EXIST", 404);
      return;
    }

    const data = {
      token: await tokenSign(user),
      user,
    };

    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_LOGIN_USER");
  }
};

export const getUsers = async (_req: Request, res: Response) => {
  try {
    const data = await UsersModel.find();
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_USERS", 403);
  }
};
