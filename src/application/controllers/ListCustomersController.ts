import { tokens } from "@/di/tokens";
import { Response, Request } from "express";
import { IListCustomersService } from "@/domain/services/ListCustomersService";
import { IEndPointController } from "@/presentation/routes/Controller";
import httpStatus from "http-status";
import { inject, injectable } from "tsyringe";

@injectable()
export class ListCustomerController implements IEndPointController {
  constructor(
    @inject(tokens.ListCustomersService)
    private listCustomersService: IListCustomersService
  ) {
    this.listCustomersService = listCustomersService;
  }
  async handle(_: Request, res: Response): Promise<Response> {
    try {
      console.log("List controller")
      const customersList = await this.listCustomersService.list();
      return res
        .status(httpStatus.OK)
        .send({ status: "success", customers: customersList });
    } catch (error) {
      console.log(error);
      return res.sendStatus(httpStatus.BAD_REQUEST);
    }
  }
}
