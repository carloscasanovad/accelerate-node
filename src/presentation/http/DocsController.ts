import { inject, injectable } from "tsyringe";
import { DocsService } from "./DocsService";
import { tokens } from "@/di/tokens";

@injectable()
export class DocsController {
  constructor(
    @inject(tokens.DocsService)
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
