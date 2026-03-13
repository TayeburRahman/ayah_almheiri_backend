import { IMenuCategory } from './menu_category.interface';
import { MenuCategory } from './menu_category.model';

const create = async (payload: IMenuCategory): Promise<IMenuCategory> => {
  const result = await MenuCategory.create(payload);
  return result;
};

const findByShopOwner = async (shopOwnerId: string) => {
  const result = await MenuCategory.find({ shopOwnerId });
  return result;
};

const findById = async (id: string) => {
  const result = await MenuCategory.findById(id);
  return result;
};

const updateById = async (id: string, payload: Partial<IMenuCategory>) => {
  const result = await MenuCategory.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

const deleteById = async (id: string) => {
  const result = await MenuCategory.findByIdAndDelete(id);
  return result;
};

export const MenuCategoryService = {
  create,
  findByShopOwner,
  findById,
  updateById,
  deleteById,
};
