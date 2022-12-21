import { IRoutesController } from "@/presentation/routes/Controller";
import { Request, Response } from "express";

export type ControllerAdapterType = (
  controller: IRoutesController
) => (req: Request, res: Response) => Response;
