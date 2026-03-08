import express from "express";
import auth from "../../middlewares/auth";
import { ENUM_USER_ROLE } from "../../../enums/user";
import { AdminController } from "./admin.controller";
import { AdminValidation } from "./admin.validation";
import { validateRequest } from "../../middlewares/validateRequest";

const router = express.Router();

// ─── Shop Owner Management ─────────────────────────────────────────
router.get(
  "/shop_owner/request",
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  AdminController.getShopOwnerRequests
);

router.patch(
  "/shop_owner/accept",
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(AdminValidation.acceptShopOwner),
  AdminController.acceptShopOwner
);

router.patch(
  "/shop_owner/blocked",
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(AdminValidation.blockedShopOwner),
  AdminController.blockedShopOwner
);

router.patch(
  "/shop_owner/details/:id",
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(AdminValidation.updateShopOwnerDetails),
  AdminController.updateShopOwnerDetails
);

// ─── Admin Management (Super Admin only) ───────────────────────────
router.post(
  "/create",
  auth(ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(AdminValidation.createAdmin),
  AdminController.createAdmin
);

router.patch(
  "/profile/:id",
  auth(ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(AdminValidation.updateAdminProfile),
  AdminController.updateAdminProfile
);

router.delete(
  "/:id",
  auth(ENUM_USER_ROLE.SUPER_ADMIN),
  validateRequest(AdminValidation.deleteAdmin),
  AdminController.deleteAdmin
);

export const AdminRoutes = router;
