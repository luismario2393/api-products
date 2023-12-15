import { Request, Response } from "express";

import ProductsModel from "../models/products";
import handleHttpError from "../utils/handleError";

export const getProducts = async (_req: Request, res: Response) => {
  try {
    const data = await ProductsModel.findAllData();
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_PRODUCTS", 403);
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const body = req.body;
    const data = await ProductsModel.create(body);
    res.send({ data });
  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_CREATE_ITEM");
  }
};

export const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await ProductsModel.deleteOne({ _id: id });
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_ITEM");
  }
};
