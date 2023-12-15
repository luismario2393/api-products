import { Request, Response } from "express";
import { ProductsModel, UsersModel } from "../models";
import handleHttpError from "../utils/handleError";
import BrandsModel from "../models/brands";
import DiscountsModel from "../models/discounts";

export const getPrice = async (req: Request, res: Response) => {
  try {
    const { user_id, nombre_producto } = req.params;

    const dataUser = await UsersModel.findById(user_id);

    if (!dataUser) {
      handleHttpError(res, "USER_NOT_FOUND", 403);
      return;
    }

    const dataProduct = await ProductsModel.findOne({
      name: nombre_producto,
    });

    if (!dataProduct) {
      handleHttpError(res, "PRODUCT_NOT_FOUND", 403);
      return;
    }

    const dataBrand = await BrandsModel.findById({
      _id: dataProduct.brandId,
    });

    if (!dataBrand) {
      handleHttpError(res, "BRAND_NOT_FOUND", 403);
      return;
    }

    const dataDiscount = await DiscountsModel.findOne({
      userId: user_id,
      brandId: dataProduct.brandId,
    });

    const basePrice = dataProduct.basePrice;
    const discountPercent = dataDiscount ? dataDiscount.percent : 0;

    const priceWithDiscount = basePrice - (basePrice * discountPercent) / 100;

    res.send({
      userName: dataUser.name,
      brand: dataBrand.name,
      product: dataProduct.name,
      price: basePrice,
      discount: discountPercent,
      priceWithDiscount: priceWithDiscount,
    });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_PRICE", 403);
  }
};
