import { inject, injectable } from "tsyringe";
import { Collection, WithId } from "mongodb";
import { tokens } from "@/di/tokens";
import { IDatabaseClient } from "@/infrastructure/db/db";
import { ICustomerRepository } from "../types/services/ICustomerRepository";
import { ICustomerInfo } from "../types/Customer";

@injectable()
export class CustomerRepository implements ICustomerRepository {
  private collection: Collection<Document>;
  constructor(
    @inject(tokens.MongoClient)
    public database: IDatabaseClient
  ) {
    this.collection = database.getInstance().collection("customers");
  }
  public async create(customerInfo: ICustomerInfo) {
    try {
      return await this.collection.insertOne(customerInfo);
    } catch (error) {
      throw new Error()
    }
  }

  public async list(): Promise<WithId<Document>[]> {
    try {
      return this.collection.find().toArray();
    } catch (error) {
      throw new Error();
    }
  }
}
