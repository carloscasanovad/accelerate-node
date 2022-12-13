import { Router } from "express";
import { customerRoute } from "./CustomerRoute.js";
var router = Router();
router.use("/customer", customerRoute);
export default router;
