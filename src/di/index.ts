import { CreateCustomerController } from "../presentation/controllers/CreateCustomerController";
import controllerAdapterMiddleware from "../application/middlewares/ControllerAdapterMiddleware";
import { ControllerAdapterType } from "@/protocols";
import { container } from "tsyringe";
import { DocsController } from "@/presentation/http/DocsController";
import { DocsService } from "@/presentation/http/DocsService";
import { tokens } from "./tokens";
import MongoDBClient, { IDatabaseClient } from "@/infrastructure/db/db";
import { ListCustomerController } from "@/presentation/controllers/ListCustomersController";
import { DocsRouter } from "@/presentation/http/DocsRouter";
import { CustomerRouter } from "@/presentation/routes/customer/CustomerRouter";
import { MainRouter } from "@/presentation/routes/Router";
import { ICustomerRepository } from "@/domain/customer/types/services/ICustomerRepository";
import { CustomerRepository } from "@/domain/customer/infrastructure/CustomerRepository";
import { ICustomerService } from "@/domain/customer/types/services/ICustomerService";
import { CustomerService } from "@/application/services/CustomerService";

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
childContainer.registerSingleton<ICustomerService>(
  tokens.CustomerService,
  CustomerService
);
childContainer.registerSingleton<CreateCustomerController>(
  tokens.CreateCustomerController,
  CreateCustomerController
);
childContainer.registerSingleton<ListCustomerController>(
  tokens.ListCustomerController,
  ListCustomerController
);
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
