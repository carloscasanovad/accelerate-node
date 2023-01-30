import { InsertOneResult, WithId } from "mongodb";
import { ICustomerInfo } from "../Customer";

export interface ICustomerService {
  createCustomer(customerInfo: ICustomerInfo): Promise<InsertOneResult<Document>>;
  listCustomers(): Promise<WithId<Document>[]>;
}
