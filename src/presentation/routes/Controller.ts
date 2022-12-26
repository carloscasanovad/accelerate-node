import { Request, Response } from "express";

export type RouteBase = (req: Request, res: Response) => Response;

export interface IRoutesController {
  handle: RouteBase;
}
