import { Router } from "express";
import { CustomerController } from "@controllers/CustomerController";
import { customerSchema } from "@middlewares/schemas/CustomerSchema";
import { validateBody } from "@middlewares/ValidatorMiddleware";

const customerRoute = Router();

const controller = new CustomerController();

customerRoute.post("/", validateBody(customerSchema), controller.createUser);

export { customerRoute };
