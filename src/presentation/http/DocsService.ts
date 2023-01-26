import YAML from "yamljs";
import SwaggerUi from "swagger-ui-express";
import { join } from "path";
import { injectable } from "tsyringe";

@injectable()
export class DocsService {
  //Init Swagger
  public initDocs = SwaggerUi.serve;
  //Build docs
  public makeDocs = SwaggerUi.setup(YAML.load(join(__dirname, "index.yaml")));
}
