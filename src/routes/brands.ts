import express from "express";
import { getBrands, createBrand, deleteBrand } from "../controllers/brands";

const router = express.Router();

/**
 * @openapi
 * /brands:
 *      get:
 *          tags:
 *              - Brands
 *          summary: "Brands"
 *          description: "Brands"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/brands"
 *          responses:
 *                  '201':
 *                      description: List of brands
 *                  '403':
 *                      description: Validation error
 */
router.get("/", getBrands);
/**
 * @openapi
 * /brands:
 *      post:
 *          tags:
 *              - Brands
 *          summary: "Create Brands"
 *          description: "Brands"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/brands"
 *          responses:
 *                  '201':
 *                      description: Created brand successfully
 *                  '403':
 *                      description: Validation error
 */
router.post("/", createBrand);
/**
 * @openapi
 * /brands:
 *      delete:
 *          tags:
 *              - Brands
 *          summary: "Delete Brands"
 *          description: "Brands"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/brands"
 *          responses:
 *                  '201':
 *                      description: Delete brand successfully
 *                  '403':
 *                      description: Validation error
 */
router.delete("/:id", deleteBrand);

export default router;
