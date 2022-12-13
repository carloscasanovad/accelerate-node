import { Response, Request } from "express";
import { Customer } from "../../domain/user/model/CustomerModel.js";
import { CustomerInfo } from "../../protocols.js";
import httpStatus from "http-status";

export class CustomerController {
  createUser(req: Request, res: Response) {
    const customerInfo = req.body as CustomerInfo;
    const newCustomer = new Customer(customerInfo);
    return res
      .status(httpStatus.CREATED)
      .send({ status: "success", customer: newCustomer });
  }
}