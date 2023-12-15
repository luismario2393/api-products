import { Document, Schema, model } from "mongoose";

export interface IBrands extends Document {
  name: string;
}

const BrandsSchema = new Schema<IBrands>(
  {
    name: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const BrandsModel = model<IBrands>("brandsChallenge", BrandsSchema);

export default BrandsModel;
