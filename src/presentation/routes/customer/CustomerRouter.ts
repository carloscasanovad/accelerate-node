import { Router } from "express";
import { customerSchema } from "../../../application/middlewares/schemas/CustomerSchema";
import { validateBody } from "../../../application/middlewares/ValidatorMiddleware";
import { injectable, inject } from "tsyringe";
import { ControllerAdapterType } from "../../../protocols";
import { tokens } from "@/di/tokens";
import { IRouterController } from "../Controller";

@injectable()
export class CustomerRouter {
  private router = Router();
  constructor(
    @inject(tokens.ControllerAdapter)
    private controllerAdapter: ControllerAdapterType,
    @inject(tokens.CreateCustomerController)
    private createCustomerController: IRouterController,
    @inject(tokens.ListCustomerController)
    private listCustomerController: IRouterController
  ) {}
  public setup(): Router {
    this.router.post(
      "/",
      validateBody(customerSchema),
      this.controllerAdapter(this.createCustomerController)
    );
    this.router.get("/", this.controllerAdapter(this.listCustomerController));
    return this.router;
  }
}
