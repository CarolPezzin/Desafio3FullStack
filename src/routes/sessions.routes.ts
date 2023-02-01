import { Router } from "express";
import {createSessionController} from "../controllers/sessions.controllers";

const sessionsRoutes = Router();

sessionsRoutes.post("", createSessionController);


export default sessionsRoutes;
