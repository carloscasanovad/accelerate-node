import { Response, Request } from "express";
import httpStatus from "http-status";
import { injectable, inject } from "tsyringe";
import { IEndPointController } from "@routes/Controller";
import { tokens } from "@/di/tokens";
import { ICustomerService } from "@/domain/customer/types/services/ICustomerService";
import { ICustomerInfo } from "@/domain/customer/types/Customer";

@injectable()
export class CreateCustomerController implements IEndPointController {
  constructor(
    @inject(tokens.CustomerService)
    private customerService: ICustomerService
  ) {
    this.customerService = customerService;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const customerInfo = req.body as ICustomerInfo;

    try {
      const newCustomer = await this.customerService.createCustomer(customerInfo);
      return res
        .status(httpStatus.CREATED)
        .send({ status: "success", customer: newCustomer });
    } catch (error) {
      return res.sendStatus(httpStatus.BAD_REQUEST);
    }
  }
}
