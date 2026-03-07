import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchasync';
import { ShopOwnerService } from './shop_owner.service';
import sendResponse from '../../../shared/sendResponse';
import { IReqUser } from '../auth/auth.interface';

// ─── Screen 3: Save Location ────────────────────────────────────────
const saveLocation = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.user as IReqUser;
  const result = await ShopOwnerService.saveLocation(userId, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Location saved successfully.",
    data: result,
  });
});

// ─── Screen 4: Save Business Info ───────────────────────────────────
const saveBusinessInfo = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.user as IReqUser;
  const result = await ShopOwnerService.saveBusinessInfo(userId, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Business information saved successfully.",
    data: result,
  });
});

// ─── Screen 5: Save Branches ────────────────────────────────────────
const saveBranches = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.user as IReqUser;
  const result = await ShopOwnerService.saveBranches(userId, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Branches saved successfully.",
    data: result,
  });
});

// ─── Screen 6: Upload Documents ─────────────────────────────────────
const saveDocuments = catchAsync(async (req: Request, res: Response) => {
  const { userId } = req.user as IReqUser;
  const result = await ShopOwnerService.saveDocuments(userId, req.files as any);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Documents uploaded successfully. Registration is pending admin approval.",
    data: result,
  });
});

export const ShopOwnerController = {
  saveLocation,
  saveBusinessInfo,
  saveBranches,
  saveDocuments,
};
