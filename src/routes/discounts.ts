import express from "express";
import {
  getDiscount,
  createDiscount,
  deleteDiscount,
} from "../controllers/discounts";

const router = express.Router();
/**
 * @openapi
 * /discounts:
 *      get:
 *          tags:
 *              - Discounts
 *          summary: "List Discounts"
 *          description: "Discounts"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/discounts"
 *          responses:
 *                  '201':
 *                      description: List of discount
 *                  '403':
 *                      description: Validation error
 */
router.get("/", getDiscount);
/**
 * @openapi
 * /discounts:
 *      post:
 *          tags:
 *              - Discounts
 *          summary: "Created Discounts"
 *          description: "Discounts"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/discounts"
 *          responses:
 *                  '201':
 *                      description: Created discount successfully
 *                  '403':
 *                      description: Validation error
 */
router.post("/", createDiscount);
/**
 * @openapi
 * /discounts:
 *      delete:
 *          tags:
 *              - Discounts
 *          summary: "Delete Discounts"
 *          description: "Discounts"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/discounts"
 *          responses:
 *                  '201':
 *                      description: Delete discount successfully
 *                  '403':
 *                      description: Validation error
 */
router.delete("/:id", deleteDiscount);

export default router;
