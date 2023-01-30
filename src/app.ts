import "reflect-metadata";
import express from "express";
import { container } from "@/di";
import { MainRouter } from "./presentation/routes/Router";
import { tokens } from "./di/tokens";
import cors from "cors";
import dotenv from "dotenv";
import { IDatabaseClient } from "./infrastructure/db/db";

const app = express();
const router = container.resolve<MainRouter>(tokens.MainRouter);
const mongoClient = container.resolve<IDatabaseClient>(tokens.MongoClient);
dotenv.config();
app.use(express.json()).use(router.setup()).use(cors());
mongoClient
  .connect()
  .then(() => {
    console.log("Connection to MONGODB done");
  })
  .catch((error) => {
    console.log("Connection failed");
    console.log(error);
  });

app.listen(process.env.PORT, () => {
  console.log("Magic happens on port 3000");
});

export default app;
