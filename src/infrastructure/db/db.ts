import { MongoClient, Db } from "mongodb";
import { injectable } from "tsyringe";

export interface IDatabaseClient {
  connect: () => Promise<any>;
  close: () => Promise<any>;
  getInstance: () => Db;
}

@injectable()
export default class MongoDBClient implements IDatabaseClient {
  private client: MongoClient = new MongoClient(process.env.MONGO_URI);
  private db: Db = this.client.db("accelerate");

  public async connect(): Promise<void> {
    await this.client.connect();
  }
  public async close(): Promise<void> {
    await this.client.close();
  }
  public getInstance(): Db {
    return this.db;
  }
}
