import { Request, Response } from "express";

import BrandsModel from "../models/brands";
import handleHttpError from "../utils/handleError";

export const getBrands = async (_req: Request, res: Response) => {
  try {
    const data = await BrandsModel.find();
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_BRANDS", 403);
  }
};

export const createBrand = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const data = await BrandsModel.create(body);
    res.send({ data });
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_CREATE_BRAND");
  }
};

export const deleteBrand = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await BrandsModel.deleteOne({ _id: id });
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_BRAND");
  }
};
