import { CustomerController } from "@/application/controllers/CustomerController";
import controllerAdapterMiddleware from "@/application/middlewares/ControllerAdapterMiddleware";
import {
  ICreateUserService,
  CreateUserService,
} from "@/domain/services/CustomerService";
import { ControllerAdapterType } from "@/utils/types";
import {
  ICustomerRepository,
  CustomerRepository,
} from "@repositories/UserRepository";
import { container } from "tsyringe";

//Fazendo uma injeção, o registerSingleton nós ajuda a instanciar a classe
//e faz com que somente tenhamos uma instancia dela em todo nosso projeto.
//Evitando assim o uso do new na UserRepository em algum outro lugar do codigo.
const customerContainer = container.createChildContainer();

customerContainer.registerSingleton<ICustomerRepository>(
  "CustomerRepository",
  CustomerRepository
);
customerContainer.registerSingleton<ICreateUserService>(
  "CreateUserService",
  CreateUserService
);
customerContainer.registerSingleton<CustomerController>(
  "CustomerController",
  CustomerController
);
//O register diz que o serviço dado deve ser utilizado quando a interface
//está sendo injetada e a nova instancia será criada para cada singleton
customerContainer.register<ControllerAdapterType>("ControllerAdapter", {
  useValue: controllerAdapterMiddleware,
});

export { customerContainer as container };
