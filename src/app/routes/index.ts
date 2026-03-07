import express from 'express';
import { AuthRoutes } from '../modules/auth/auth.routes';
import { ShopOwnerRoutes } from '../modules/shop_owner/shop_owner.routes';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/shop-owner',
    route: ShopOwnerRoutes,
  },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
