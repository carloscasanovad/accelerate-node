import { Response, Request } from "express";
import { ICustomerInfo } from "@/protocols";
import httpStatus from "http-status";
import { ICreateCustomerService } from "@/domain/services/CreateCustomerService";
import { injectable, inject } from "tsyringe";
import { IEndPointController } from "@routes/Controller";
import { tokens } from "@/di/tokens";

@injectable()
export class CreateCustomerController implements IEndPointController {
  constructor(
    @inject(tokens.CreateCustomerService)
    private createUserService: ICreateCustomerService
  ) {
    this.createUserService = createUserService;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const customerInfo = req.body as ICustomerInfo;
    console.log('siuuuuuuuuuuuuuuuu')

    try {
      const newCustomer = await this.createUserService.create(customerInfo);
      return res
        .status(httpStatus.CREATED)
        .send({ status: "success", customer: newCustomer });
    } catch (error) {
      console.log('siuuuuuuuuuuuuuuuu')
      console.log(error)
      return res.sendStatus(httpStatus.BAD_REQUEST);
    }
  }
}
