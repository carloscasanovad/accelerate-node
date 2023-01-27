import { Request, Response } from "express";

export type RouteBase = (req: Request, res: Response) => Promise<Response>;

export interface IEndPointController {
  handle: RouteBase;
}
