import { Model, Types } from 'mongoose';

export type IMenuCategory = {
  name: string;
  shopOwnerId?: Types.ObjectId;
};

export type MenuCategoryModel = Model<IMenuCategory>;
