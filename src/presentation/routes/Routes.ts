import { Router } from "express";
import { container } from "@/di";
import { CustomerRouter } from "./CustomerRoute";

const router = Router();
const customerRouter = container.resolve(CustomerRouter);
router.use("/customer", customerRouter.setup());

export default router;
