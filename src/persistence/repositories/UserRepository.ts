import { Customer } from "@/domain/user/model/CustomerModel";
import { CustomerInfo } from "@/protocols";

export interface ICustomerRepository {
  createUser(customerInfo: CustomerInfo): Customer;
}

export class CustomerRepository implements ICustomerRepository {
  createUser(customerInfo: CustomerInfo): Customer {
    //TODO: create user on database
    return customerInfo;
  }
}
