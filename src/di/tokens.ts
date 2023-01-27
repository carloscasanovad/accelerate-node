export const tokens = {
  //Application
  CreateCustomerController: Symbol("CreateCustomerController"),
  ListCustomerController: Symbol("ListCustomerController"),
  ControllerAdapter: Symbol("ControllerAdapter"),

  //Persistence
  CustomerRepository: Symbol("CustomerRepository"),

  //Domain
  CreateCustomerService: Symbol("CreateCustomerService"),
  ListCustomersService: Symbol("ListCustomersService"),

  //Presentation
  MainRouter: Symbol("MainRouter"),
  CustomerRouter: Symbol("CustomerRouter"),
  DocsController: Symbol("DocsController"),
  DocsRouter: Symbol("DocsRouter"),
  DocsService: Symbol("DocsService"),

  //Infrastructure
  MongoClient: Symbol("MongoClient"),
};
