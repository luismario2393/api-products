import { Request, Response } from "express";

import handleHttpError from "../utils/handleError";
import DiscountsModel from "../models/discounts";

export const getDiscount = async (_req: Request, res: Response) => {
  try {
    const data = await DiscountsModel.findAllData();
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_DISCOUNTS", 403);
  }
};

export const createDiscount = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const data = await DiscountsModel.create(body);
    res.send({ data });
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_CREATE_ITEM");
  }
};

export const deleteDiscount = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await DiscountsModel.deleteOne({ _id: id });
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_ITEM");
  }
};
