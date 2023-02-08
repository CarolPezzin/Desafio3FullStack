import { Router } from "express";
import { contactDeleteController, createContactsController, listContactsController, updateContactController } from "../controllers/contacts.controller";
import { listUserConstroller, updateUserController, userDeleteController } from "../controllers/users.controllers";
import { createUserController } from "../controllers/users.controllers";
import { authId } from "../middlewares/authIDADM.middleware";
import ensureIsAdmMiddleware from "../middlewares/ensureAdm.middlewares";
import ensureAuthMiddleware from "../middlewares/ensureAuth.middlewares";

const userRoutes = Router();

userRoutes.post('', createUserController);
userRoutes.get('', ensureAuthMiddleware, ensureIsAdmMiddleware, listUserConstroller);
userRoutes.patch('/:id', ensureAuthMiddleware, authId, updateUserController);
userRoutes.delete('/:id', ensureAuthMiddleware, ensureIsAdmMiddleware, userDeleteController);

userRoutes.post('/contacts', ensureAuthMiddleware, createContactsController);
userRoutes.get('/contacts', ensureAuthMiddleware, ensureIsAdmMiddleware, listContactsController);
userRoutes.patch('/contacts/:id', ensureAuthMiddleware, ensureIsAdmMiddleware, updateContactController);
userRoutes.delete('/contacts/:id', ensureAuthMiddleware, ensureIsAdmMiddleware, contactDeleteController);



export default userRoutes