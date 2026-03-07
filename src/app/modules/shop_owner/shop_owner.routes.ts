import express from 'express';
import auth from '../../middlewares/auth';
import { ENUM_USER_ROLE } from '../../../enums/user';
import { ShopOwnerController } from './shop_owner.controller';
import { ShopOwnerValidation } from './shop_owner.validation';
import { validateRequest } from '../../middlewares/validateRequest';
import { uploadDocument } from '../../middlewares/fileUploader';

const router = express.Router();

// Screen 3: Save location
router.post(
  "/location",
  auth(ENUM_USER_ROLE.SHOP_OWNER),
  validateRequest(ShopOwnerValidation.locationSchema),
  ShopOwnerController.saveLocation
);

// Screen 4: Save business info (Step 1/3)
router.post(
  "/business/info",
  auth(ENUM_USER_ROLE.SHOP_OWNER),
  validateRequest(ShopOwnerValidation.businessInfoSchema),
  ShopOwnerController.saveBusinessInfo
);

// Screen 5: Save branches (Step 2/3)
router.post(
  "/business/branches",
  auth(ENUM_USER_ROLE.SHOP_OWNER),
  validateRequest(ShopOwnerValidation.branchesSchema),
  ShopOwnerController.saveBranches
);

// Screen 6: Upload documents (Step 3/3)
router.post(
  "/business/documents",
  auth(ENUM_USER_ROLE.SHOP_OWNER),
  uploadDocument(),
  ShopOwnerController.saveDocuments
);

export const ShopOwnerRoutes = router;
