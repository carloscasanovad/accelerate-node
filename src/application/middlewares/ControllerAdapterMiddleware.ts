import { IRoutesController } from "@routes/Controller";
import { Request, Response } from "express";

export default function controllerAdapterMiddleware(controller: IRoutesController) {
  return (req: Request, res: Response) => controller.handle(req, res);
}
