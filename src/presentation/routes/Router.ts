import { Router } from "express";
import { CustomerRouter } from "./customer/CustomerRouter";
import { DocsRouter } from "../http/DocsRouter";
import { inject, injectable } from "tsyringe";
import { tokens } from "@/di/tokens";

@injectable()
export class MainRouter {
  private router: Router = Router();
  constructor(
    @inject(tokens.CustomerRouter)
    private customerRouter: CustomerRouter,
    @inject(tokens.DocsRouter)
    private docsRouter: DocsRouter
  ) {}
  public setup() {
    this.router = this.router.use("/customer", this.customerRouter.setup());
    this.router = this.router.use("/docs", this.docsRouter.setup());
    return this.router;
  }
}
