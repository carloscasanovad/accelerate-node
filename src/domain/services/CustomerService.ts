import { CustomerRepository } from "@/persistence/repositories/UserRepository";
import { CustomerInfo } from "@/protocols";
import { injectable, inject } from "tsyringe";
import { Customer } from "../user/model/CustomerModel";

//Clase pode receber injeções desde qualquer canto com o uso do
// container ou resolver do tsyringe
export interface ICreateUserService {
  execute(customerInfo: CustomerInfo): Customer;
}

@injectable()
export class CreateUserService implements ICreateUserService {
  constructor(
    //Aqui usando o @inject estamos passando o parametro que definimos
    //no container do UserRepository, fazendo com que não possa
    //ser mais instanciado, já que o registerSingleton fará isso por nós.
    @inject("CustomerRepository")
    private readonly customerRepository: CustomerRepository
  ) {}

  public execute(customerInfo: CustomerInfo) {
    return this.customerRepository.createUser(customerInfo);
  }
}
