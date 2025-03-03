import { Router } from "express";
import { login, register } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.get("/register", register);

authRouter.post("/login", login);

export default authRouter;
