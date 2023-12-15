import express from "express";
import { loginCtrl, registerCtrl, getUsers } from "../controllers/auth";

const router = express.Router();

/**
 * @openapi
 * /auth/register:
 *      post:
 *          tags:
 *              - Auth
 *          summary: "New user registration"
 *          description: "This route is to register a new user"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/authRegister"
 *          responses:
 *                  '201':
 *                      description: The user registers correctly
 *                  '403':
 *                      description: Validation error
 */
router.post("/register", registerCtrl);
/**
 * @openapi
 * /auth/login:
 *      post:
 *          tags:
 *              - Auth
 *          summary: "User logged in"
 *          description: "This route logs users in"
 *          requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/authLogin"
 *          responses:
 *                  '201':
 *                      description: The user successfully logged in
 *                  '403':
 *                      description: Validation error
 */
router.post("/login", loginCtrl);
router.get("/", getUsers);

export default router;
