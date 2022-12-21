import { Customer } from "@/domain/user/model/CustomerModel";
import { CustomerInfo } from "@/protocols";

export interface IUserRepository {
  createUser(data: CustomerInfo): Promise<Customer>;
}

export class UserRepository implements IUserRepository {
    //TODO: create user on database
  createUser(data: CustomerInfo): Promise<Customer> {
    throw new Error("Method not implemented.");
  }
}
