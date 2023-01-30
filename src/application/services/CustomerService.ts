import "reflect-metadata";
import { injectable, inject } from "tsyringe";
import { tokens } from "@/di/tokens";
import { WithId } from "mongodb";
import { ICustomerService } from "@/domain/customer/types/services/ICustomerService";
import { CustomerRepository } from "@/domain/customer/infrastructure/CustomerRepository";
import { ICustomerInfo } from "@/domain/customer/types/Customer";

@injectable()
export class CustomerService implements ICustomerService {
    constructor(
        @inject(tokens.CustomerRepository)
        private customerRepository: CustomerRepository
    ) { }

    public async createCustomer(customerInfo: ICustomerInfo) {
        return this.customerRepository.create(customerInfo);
    }

    public async listCustomers(): Promise<WithId<Document>[]> {
        return this.customerRepository.list();
    }

}
