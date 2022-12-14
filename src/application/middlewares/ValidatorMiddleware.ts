import { ObjectSchema } from "joi";
import { Request, Response, NextFunction } from "express";
import httpStatus from "http-status";

export function validateBody<T>(schema: ObjectSchema<T>): ValidationMiddleware {
  return validate(schema, "body");
}

function validate(schema: ObjectSchema, type: "body") {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req[type], { abortEarly: false });
    if (error) {
      const errorMessages = error.details.map((e) => e.message);
      return res.status(httpStatus.BAD_REQUEST).send(errorMessages);
    }
    next();
  };
}

type ValidationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;
