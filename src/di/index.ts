import { CreateCustomerController } from "../application/controllers/CreateCustomerController";
import controllerAdapterMiddleware from "../application/middlewares/ControllerAdapterMiddleware";
import {
  ICreateCustomerService,
  CreateCustomerService,
} from "../domain/services/CreateCustomerService";
import { ControllerAdapterType } from "@/protocols";
import {
  ICustomerRepository,
  CustomerRepository,
} from "../persistence/repositories/CustomerRepository";
import { container } from "tsyringe";
import { DocsController } from "@/presentation/http/DocsController";
import { DocsService } from "@/presentation/http/DocsService";
import { tokens } from "./tokens";
import MongoDBClient, { IDatabaseClient } from "@/infrastructure/db/db";
import {
  IListCustomersService,
  ListCustomersService,
} from "@/domain/services/ListCustomersService";
import { ListCustomerController } from "@/application/controllers/ListCustomersController";
import { DocsRouter } from "@/presentation/http/DocsRouter";
import { CustomerRouter } from "@/presentation/routes/CustomerRouter";
import { MainRouter } from "@/presentation/routes/Routes";

//Fazendo uma injeção, o registerSingleton nós ajuda a instanciar a classe
//e faz com que somente tenhamos uma instancia dela em todo nosso projeto.
//Evitando assim o uso do new na UserRepository em algum outro lugar do codigo.
const childContainer = container.createChildContainer();

childContainer.registerSingleton<MainRouter>(tokens.MainRouter, MainRouter);
childContainer.registerSingleton<CustomerRouter>(
  tokens.CustomerRouter,
  CustomerRouter
);
childContainer.registerSingleton<ICustomerRepository>(
  tokens.CustomerRepository,
  CustomerRepository
);
childContainer.registerSingleton<ICreateCustomerService>(
  tokens.CreateCustomerService,
  CreateCustomerService
);
childContainer.registerSingleton<IListCustomersService>(
  tokens.ListCustomersService,
  ListCustomersService
);
childContainer.registerSingleton<CreateCustomerController>(
  tokens.CreateCustomerController,
  CreateCustomerController
);
childContainer.registerSingleton<ListCustomerController>(
  tokens.ListCustomerController,
  ListCustomerController
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
childContainer.registerSingleton<DocsRouter>(tokens.DocsRouter, DocsRouter);
childContainer.registerSingleton<DocsService>(tokens.DocsService, DocsService);
childContainer.registerSingleton<IDatabaseClient>(
  tokens.MongoClient,
  MongoDBClient
);

export { childContainer as container };
