import express, { Router } from "express";
import fs from "fs";
import path from "path";

const router: Router = express.Router();

const PATH_ROUTES: string = __dirname;

const removeExtension = (fileName: string): string =>
  fileName.split(".").shift() || "";

fs.readdirSync(PATH_ROUTES).forEach((file: string) => {
  const name: string = removeExtension(file);
  if (name !== "index") {
    const routePath: string = `/${name}`;
    const routeModule = require(path.join(PATH_ROUTES, file));
    router.use(routePath, routeModule.default);
  }
});

export default router;
