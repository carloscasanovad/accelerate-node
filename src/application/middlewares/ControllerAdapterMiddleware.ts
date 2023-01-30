import { IRouterController } from "@routes/Controller";
import { Request, Response } from "express";

export default function controllerAdapterMiddleware(controller: IRouterController) {
  return (req: Request, res: Response) => controller.handle(req, res);
}
