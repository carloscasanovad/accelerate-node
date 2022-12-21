import { Response, Request } from "express";
import { CustomerInfo } from "@/protocols";
import { UserRepository } from "../repositories/UserRepository";
import httpStatus from "http-status";

export class CustomerController {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  createUser(req: Request, res: Response) {
    const customerInfo = req.body as CustomerInfo;
    const newCustomer = this.userRepository.createUser(customerInfo);
    return res
      .status(httpStatus.CREATED)
      .send({ status: "success", customer: newCustomer });
  }
}
