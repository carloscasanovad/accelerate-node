import { Router } from "express";
import { CustomerController } from "../../application/controllers/CustomerController.js";
import { customerSchema } from "../../application/middlewares/schemas/CustomerSchema.js";
import { validateBody } from "../../application/middlewares/ValidatorMiddleware.js";

const customerRoute = Router();

const controller = new CustomerController();

customerRoute.post("/", validateBody(customerSchema), controller.createUser);

export { customerRoute };
