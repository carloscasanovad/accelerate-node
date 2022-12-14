import { Router } from "express";
import { CustomerController } from "../../application/controllers/CustomerController";
import { customerSchema } from "../../application/middlewares/schemas/CustomerSchema";
import { validateBody } from "../../application/middlewares/ValidatorMiddleware";

const customerRoute = Router();

const controller = new CustomerController();

customerRoute.post("/", validateBody(customerSchema), controller.createUser);

export { customerRoute };
