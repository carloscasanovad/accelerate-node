import { Router } from "express";
import { CustomerController } from "../../application/controllers/CustomerController";
import { customerSchema } from "../../application/middlewares/schemas/CustomerSchema";
import { validateBody } from "../../application/middlewares/ValidatorMiddleware";
import { injectable, inject } from "tsyringe";
import { ControllerAdapterType } from "../../protocols";
import { tokens } from "@/di/tokens";

@injectable()
export class CustomerRouter {
  private router = Router();
  constructor(
    @inject(tokens.ControllerAdapter)
    private controllerAdapter: ControllerAdapterType,
    @inject(tokens.CustomerController)
    private customerController: CustomerController
  ) {}
  public setup(): Router {
    this.router.post(
      "/",
      validateBody(customerSchema),
      this.controllerAdapter(this.customerController)
    );

    return this.router;
  }
}
