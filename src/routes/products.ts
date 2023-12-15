import express from "express";
import {
  getProducts,
  createProduct,
  deleteItem,
} from "../controllers/products";

let router = express.Router();

/**
 * @openapi
 * /products:
 *      get:
 *          tags:
 *              - Products
 *          summary: "List Products"
 *          description: "Products"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/products"
 *          responses:
 *                  '201':
 *                      description: List of products
 *                  '403':
 *                      description: Validation error
 */
router.get("/", getProducts);
/**
 * @openapi
 * /products:
 *      post:
 *          tags:
 *              - Products
 *          summary: "Created Products"
 *          description: "Products"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/products"
 *          responses:
 *                  '201':
 *                      description: Created product successfully
 *                  '403':
 *                      description: Validation error
 */
router.post("/", createProduct);
/**
 * @openapi
 * /products:
 *      delete:
 *          tags:
 *              - Products
 *          summary: "Delete Products"
 *          description: "Products"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/products"
 *          responses:
 *                  '201':
 *                      description: Delete product successfully
 *                  '403':
 */
router.delete("/:id", deleteItem);

export default router;
