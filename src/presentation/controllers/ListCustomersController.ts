import { tokens } from "@/di/tokens";
import { Response, Request } from "express";
import { IRouterController } from "@/presentation/routes/Controller";
import httpStatus from "http-status";
import { inject, injectable } from "tsyringe";
import { ICustomerService } from "@/domain/customer/types/services/ICustomerService";

@injectable()
export class ListCustomerController implements IRouterController {
  constructor(
    @inject(tokens.CustomerService)
    private customerService: ICustomerService
  ) {
    this.customerService = customerService;
  }
  async handle(_: Request, res: Response): Promise<Response> {
    try {
      const customersList = await this.customerService.listCustomers();
      return res
        .status(httpStatus.OK)
        .send({ status: "success", customers: customersList });
    } catch (error) {
      return res.sendStatus(httpStatus.BAD_REQUEST);
    }
  }
}
