import { tokens } from "@/di/tokens";
import { CustomerRepository } from "@/persistence/repositories/CustomerRepository";
import { WithId } from "mongodb";
import { inject, injectable } from "tsyringe";

export interface IListCustomersService {
  list(): Promise<WithId<Document>[]>;
}

@injectable()
export class ListCustomersService implements IListCustomersService {
  constructor(
    @inject(tokens.CustomerRepository)
    private customerRepository: CustomerRepository
  ) {}
  public async list(): Promise<WithId<Document>[]> {
    console.log("Service")
    return await this.customerRepository.list();
  }
}
