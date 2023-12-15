import express from "express";

import { getPrice } from "../controllers/price";
import { authMiddleware } from "../middlewares/session";

const router = express.Router();

/**
 * @openapi
 * /price/{user_id}/{nombre_producto}:
 *      get:
 *          tags:
 *              - Price
 *          summary: "Price"
 *          description: "Price"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/price"
 *          responses:
 *                  '201':
 *                      description: Price of product
 *                  '403':
 *                      description: Validation error
 */
router.get("/:user_id/:nombre_producto", authMiddleware, getPrice);

export default router;
