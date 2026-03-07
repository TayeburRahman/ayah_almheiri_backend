import mongoose, { Document } from "mongoose";

export type ICustomer = Document & {
  _id: mongoose.Schema.Types.ObjectId;
  authId: mongoose.Schema.Types.ObjectId;
  name: string;
  email: string;
  phone_number: string;
  profile_image?: string | null;
  status: "active" | "deactivate";
  createdAt?: Date;
  updatedAt?: Date;
};
