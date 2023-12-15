import express, { Express, Request, Response } from "express";
import "dotenv/config";
import dbConnect from "./config/mongo";
import cors from "cors";
import router from "./routes";
import swaggerUI from "swagger-ui-express";
import openApiConfiguration from "./docs/swagger";

const PORT = 3001;

const app: Express = express();

app.use(cors());

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(
  "/documentation",
  swaggerUI.serve,
  swaggerUI.setup(openApiConfiguration)
);

// routes
app.use("/api", router);

dbConnect()
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err: any) => {
    console.log("Database connection failed!", err);
  });

export default app;
