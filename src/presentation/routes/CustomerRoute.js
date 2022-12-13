import { Router } from "express";
import { CustomerController } from "../../application/controllers/CustomerController.js";
import { validateBody } from "../../application/middlewares/ValidatorMiddleware.js";
import { customerSchema } from "../../application/schemas/CustomerSchema.js";

const customerRoute = Router();

const controller = new CustomerController();

customerRoute.post("/", validateBody(customerSchema), controller.createUser);

export { customerRoute };
