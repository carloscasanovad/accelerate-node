import { ICustomerInfo } from "@/protocols";
import { inject, injectable } from "tsyringe";
import { Collection, InsertOneResult, WithId } from "mongodb";
import { tokens } from "@/di/tokens";
import { IDatabaseClient } from "@/infrastructure/db/db";

export interface ICustomerRepository {
  create(customerInfo: ICustomerInfo): Promise<InsertOneResult<Document>>;
  list(): Promise<WithId<Document>[]>;
}

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
    return await this.collection.insertOne(customerInfo as any);
  }

  public async list(): Promise<WithId<Document>[]> {
    console.log("Repository");
    try {
      const data = await this.collection.find().toArray();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      console.log("caiu no erro");
      throw new Error();
    }
  }
}
