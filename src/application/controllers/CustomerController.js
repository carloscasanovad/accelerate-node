import { Customer } from "../../domain/user/model/CustomerModel.js";

export class CustomerController {
  createUser(req, res) {
    const newCustomer = new Customer(req.body);
    return res.status(201).send({ status: "success", customer: newCustomer });
  }
}
