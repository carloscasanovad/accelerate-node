import { Router } from "express";
import { container } from "../../di/index";
import { CustomerRouter } from "../routes/CustomerRoute";
import { DocsRouter } from "../docs/DocsRouter";

const router = Router();
const customerRouter = container.resolve(CustomerRouter);
const docsRouter = container.resolve(DocsRouter);
router.use("/customer", customerRouter.setup());
router.use("/docs", docsRouter.setup());
export default router;
