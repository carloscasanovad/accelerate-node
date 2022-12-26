import { Router } from "express";
import { CustomerController } from "@controllers/CustomerController";
import { customerSchema } from "@middlewares/schemas/CustomerSchema";
import { validateBody } from "@middlewares/ValidatorMiddleware";
import { injectable, inject } from "tsyringe";
import { ControllerAdapterType } from "@/protocols";

@injectable()
export class CustomerRouter {
  private router = Router();
  constructor(
    @inject("CustomerController")
    private customerController: CustomerController,
    @inject("ControllerAdapter")
    private controllerAdapter: ControllerAdapterType
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
