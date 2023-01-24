import { inject, injectable } from "tsyringe";
import { DocsController } from "./DocsController";
import { Router } from "express";

@injectable()
export class DocsRouter {
  private router = Router();
  constructor(
    @inject("DocsController")
    private docsController: DocsController
  ) {}
  public setup(): Router {
    this.router.use("/", this.docsController.initDocs);
    this.router.get("/", this.docsController.makeDocs);
    return this.router;
  }
}
