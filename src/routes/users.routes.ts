import { Router } from "express";
import { listUserConstroller } from "../controllers/users.controllers";
import { createUserController } from "../controllers/users.controllers";
import ensureIsAdmMiddleware from "../middlewares/ensureAdm.middlewares";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middlewares";

const userRoutes = Router();

userRoutes.post('', createUserController);
userRoutes.get('', ensureAuthMiddleware, ensureIsAdmMiddleware ,listUserConstroller);

export default userRoutes