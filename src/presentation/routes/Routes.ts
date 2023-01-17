import { Router } from "express";
import { container } from "../../di/index";
import { CustomerRouter } from "../routes/CustomerRoute";

const router = Router();
const customerRouter = container.resolve(CustomerRouter);
router.use("/customer", customerRouter.setup());

export default router;
