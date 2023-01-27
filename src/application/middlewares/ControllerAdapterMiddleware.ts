import { IEndPointController } from "@routes/Controller";
import { Request, Response } from "express";

export default function controllerAdapterMiddleware(controller: IEndPointController) {
  return (req: Request, res: Response) => controller.handle(req, res);
}
