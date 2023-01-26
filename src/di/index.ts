import { CustomerController } from "../application/controllers/CustomerController";
import controllerAdapterMiddleware from "../application/middlewares/ControllerAdapterMiddleware";
import {
  ICreateUserService,
  CreateUserService,
} from "../domain/services/CustomerService";
import { ControllerAdapterType } from "@/protocols";
import {
  ICustomerRepository,
  CustomerRepository,
} from "../persistence/repositories/CustomerRepository";
import { container } from "tsyringe";
import { DocsController } from "@/presentation/http/DocsController";
import { DocsService } from "@/presentation/http/DocsService";
import { tokens } from "./tokens";

//Fazendo uma injeção, o registerSingleton nós ajuda a instanciar a classe
//e faz com que somente tenhamos uma instancia dela em todo nosso projeto.
//Evitando assim o uso do new na UserRepository em algum outro lugar do codigo.
const childContainer = container.createChildContainer();

childContainer.registerSingleton<ICustomerRepository>(
  tokens.CustomerRepository,
  CustomerRepository
);
childContainer.registerSingleton<ICreateUserService>(
  tokens.CreateUserService,
  CreateUserService
);
childContainer.registerSingleton<CustomerController>(
  tokens.CustomerController,
  CustomerController
);
//O register diz que o serviço dado deve ser utilizado quando a interface
//está sendo injetada e a nova instancia será criada para cada singleton
childContainer.register<ControllerAdapterType>(tokens.ControllerAdapter, {
  useValue: controllerAdapterMiddleware,
});
childContainer.registerSingleton<DocsController>(
  tokens.DocsController,
  DocsController
);
childContainer.registerSingleton<DocsService>(tokens.DocsService, DocsService);

export { childContainer as container };
