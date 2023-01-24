import { inject, injectable } from "tsyringe";
import { DocsService } from "./DocsService";

@injectable()
export class DocsController {
  constructor(
    @inject("DocsService")
    private docsService: DocsService
  ) {
    this.docsService = docsService;
  }

  /**
   * Initialize API service documentation.
   */
  public initDocs = this.docsService.initDocs;

  /**
   * Returns all built docs.
   */
  public makeDocs = this.docsService.makeDocs;
}
