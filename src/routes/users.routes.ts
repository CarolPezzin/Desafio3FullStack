import { Router } from "express";
import { listUserConstroller, updateUserController, userDeleteController } from "../controllers/users.controllers";
import { createUserController } from "../controllers/users.controllers";
import ensureIsAdmMiddleware from "../middlewares/ensureAdm.middlewares";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middlewares";

const userRoutes = Router();

userRoutes.post('', createUserController);
userRoutes.get('', ensureAuthMiddleware, ensureIsAdmMiddleware, listUserConstroller);
userRoutes.patch('/:id', ensureAuthMiddleware, ensureIsAdmMiddleware, updateUserController);
userRoutes.delete('/:id', ensureAuthMiddleware, ensureIsAdmMiddleware, userDeleteController);

export default userRoutes