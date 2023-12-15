import { Document, Schema, model } from "mongoose";

export interface IUsers extends Document {
  name: string;
  email: string;
  password: string;
  discounts: { brandId: string; percent: number }[];
}

const UsersSchema = new Schema<IUsers>(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const UsersModel = model<IUsers>("usersChallenge", UsersSchema);

export default UsersModel;
