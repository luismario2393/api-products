import mongoose, { Document, Schema, model } from "mongoose";
import BrandsModel from "./brands";

interface IDiscounts extends Document {
  userId: mongoose.Schema.Types.ObjectId;
  brandId: mongoose.Schema.Types.ObjectId;
  percent: number;
}

interface IDiscountsSchema extends mongoose.Model<IDiscounts> {
  findAllData(): Promise<IDiscounts[]>;
}

const DiscountsSchema = new Schema<IDiscounts, IDiscountsSchema>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    brandId: {
      type: mongoose.Schema.Types.ObjectId,
    },
    percent: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

DiscountsSchema.statics.findAllData = async function () {
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
      $group: {
        _id: "$userId",
        discounts: {
          $push: {
            _id: "$_id",
            brandId: "$brandId",
            percent: "$percent",
            brandName: "$brand.name",
          },
        },
      },
    },
    {
      $project: {
        userId: "$_id",
        _id: 0,
        discounts: 1,
      },
    },
  ]);

  return joinData;
};

const DiscountsModel = model<IDiscounts, IDiscountsSchema>(
  "discountsChallenge",
  DiscountsSchema
);
export default DiscountsModel;
