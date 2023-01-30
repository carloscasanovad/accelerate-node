import { InsertOneResult, WithId } from "mongodb";
import { ICustomerInfo } from "../Customer";

export interface ICustomerRepository {
    create(customerInfo: object): Promise<InsertOneResult<Document>>;
    list(): Promise<WithId<Document>[]>;
}