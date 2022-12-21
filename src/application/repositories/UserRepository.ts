import { Customer } from "@/domain/user/model/CustomerModel";
import { CustomerInfo } from "@/protocols";
import "reflect-metadata";
import { container, injectable, inject } from "tsyringe";

export interface IUserRepository {
  createUser(customerInfo: CustomerInfo): Customer;
}

export class UserRepository implements IUserRepository {
  createUser(customerInfo: CustomerInfo): Customer {
    //TODO: create user on database
    return customerInfo;
  }
}
