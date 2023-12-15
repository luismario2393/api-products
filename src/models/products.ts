import mongoose, { Document, Schema, model } from "mongoose";
import BrandsModel from "./brands";

export interface IProduct extends Document {
  name: string;
  stock: boolean;
  basePrice: number;
  brandId: mongoose.Schema.Types.ObjectId;
}

interface IProductsSchema extends mongoose.Model<IProduct> {
  findAllData(): Promise<IProduct[]>;
}

const ProductsSchema = new Schema<IProduct, IProductsSchema>(
  {
    name: {
      type: String,
    },
    stock: {
      type: Boolean,
    },
    basePrice: {
      type: Number,
    },
    brandId: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

ProductsSchema.statics.findAllData = async function () {
  const joinData = await this.aggregate([
    {
      $lookup: {
        from: BrandsModel.collection.name,
        localField: "brandId",
        foreignField: "_id",
        as: "brand",
      },
    },
    {
      $unwind: "$brand",
    },
    {
      $match: {
        stock: true,
      },
    },
  ]);

  return joinData;
};

const ProductsModel = model<IProduct, IProductsSchema>(
  "productsChallenge",
  ProductsSchema
);

export default ProductsModel;
