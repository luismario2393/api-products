import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.0",
  info: {
    title: "Documentación Challenge",
    version: "1.0.0",
  },
  servers: [
    {
      url: "http://localhost:3001/api",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      authLogin: {
        type: "object",
        required: ["email", "password"],
        properties: {
          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
        },
      },
      authRegister: {
        type: "object",
        required: ["email", "password", "name"],
        properties: {
          name: {
            type: "string",
          },

          email: {
            type: "string",
          },
          password: {
            type: "string",
          },
        },
      },
      brands: {
        type: "object",
        required: ["name"],
        properties: {
          name: {
            type: "string",
          },
        },
      },
      discounts: {
        type: "object",
        required: ["percent", "brandId", "userId"],
        properties: {
          percent: {
            type: "number",
          },
          brandId: {
            type: "string",
          },
          userId: {
            type: "string",
          },
        },
      },
      products: {
        type: "object",
        required: ["name", "stock", "basePrice", "brandId"],
        properties: {
          name: {
            type: "string",
          },
          stock: {
            type: "boolean",
          },
          basePrice: {
            type: "number",
          },
          brandId: {
            type: "string",
          },
        },
      },
      price: {
        type: "object",
        required: [
          "userName",
          "brand",
          "product",
          "price",
          "discount",
          "priceWithDiscount",
        ],
        properties: {
          userName: {
            type: "string",
          },
          brand: {
            type: "string",
          },
          product: {
            type: "string",
          },
          price: {
            type: "number",
          },
          discount: {
            type: "number",
          },
          priceWithDiscount: {
            type: "number",
          },
        },
      },
    },
  },
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts"],
};

const openApiConfiguration = swaggerJSDoc(swaggerOptions);

export default openApiConfiguration;
