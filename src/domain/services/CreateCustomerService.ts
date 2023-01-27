import "reflect-metadata";
import { ICustomerInfo } from "@/protocols";
import { injectable, inject } from "tsyringe";
import { CustomerRepository } from "../../persistence/repositories/CustomerRepository";
import { tokens } from "@/di/tokens";
import { InsertOneResult } from "mongodb";

//Clase pode receber injeções desde qualquer canto com o uso do
// container ou resolver do tsyringe
export interface ICreateCustomerService {
  create(customerInfo: ICustomerInfo): Promise<InsertOneResult<Document>>;
}

@injectable()
export class CreateCustomerService implements ICreateCustomerService {
  constructor(
    //Aqui usando o @inject estamos passando o parametro que definimos
    //no container do UserRepository, fazendo com que não possa
    //ser mais instanciado, já que o registerSingleton fará isso por nós.
    @inject(tokens.CustomerRepository)
    private customerRepository: CustomerRepository
  ) {}

  public create(customerInfo: ICustomerInfo) {
    return this.customerRepository.create(customerInfo as any);
  }
}
