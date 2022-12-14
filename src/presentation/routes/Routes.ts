import { Router } from "express";
import { customerRoute } from "@routes/CustomerRoute";

const router = Router();

router.use("/customer", customerRoute);

export default router;
