import { Router } from "express";
import { customerRoute } from "./CustomerRoute.js";

const router = Router();

router.use("/customer", customerRoute);

export default router;
