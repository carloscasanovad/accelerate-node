import { IEndPointController } from "@routes/Controller";
import { Request, Response } from "express";
import { ObjectId } from "mongodb";

export type ControllerAdapterType = (
  controller: IEndPointController
) => (req: Request, res: Response) => Response | Promise<Response>;
