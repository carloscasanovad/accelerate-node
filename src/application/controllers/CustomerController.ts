import { Response, Request } from "express";
import { CustomerInfo } from "@/protocols";
import httpStatus from "http-status";
import { ICreateUserService } from "@/domain/services/CustomerService";
import { injectable, inject } from "tsyringe";
import { IRoutesController } from "@/presentation/routes/Controller";

@injectable()
export class CustomerController implements IRoutesController {
  constructor(
    @inject("CreateUserService") private createUserService: ICreateUserService
  ) {
    this.createUserService = createUserService;
  }

  handle(req: Request, res: Response): Response {
    const customerInfo = req.body as CustomerInfo;
    const newCustomer = this.createUserService.execute(customerInfo);
    return res
      .status(httpStatus.CREATED)
      .send({ status: "success", customer: newCustomer });
  }
}
