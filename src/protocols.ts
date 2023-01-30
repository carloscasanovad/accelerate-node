import { IRouterController } from "@routes/Controller";
import { Request, Response } from "express";
import { ObjectId } from "mongodb";

export type ControllerAdapterType = (
  controller: IRouterController
) => (req: Request, res: Response) => Response | Promise<Response>;
