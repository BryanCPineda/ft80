const swaggerUi = require("swagger-ui-express")

const port = process.env.PORT || 3000

const swaggerDocument = {
	openapi: "3.0.3",
	info: {
		title: "API de Productos FT80",
		version: "1.0.0",
		description: "API REST para consultar y crear productos. La aplicacion usa JSON y una base de datos PostgreSQL configurada mediante variables de entorno."
	},
	servers: [
		{
			url: `http://localhost:${port}`,
			description: "Servidor local"
		}
	],
	tags: [
		{
			name: "Estado",
			description: "Verificacion de disponibilidad del servidor"
		},
		{
			name: "Productos",
			description: "Consulta y creacion de productos"
		}
	],
	paths: {
		"/": {
			get: {
				tags: ["Estado"],
				summary: "Comprueba el estado del servidor",
				responses: {
					"200": {
						description: "El servidor esta disponible",
						content: {
							"application/json": {
								schema: { $ref: "#/components/schemas/HealthResponse" }
							}
						}
					}
				}
			}
		},
		"/productos": {
			get: {
				tags: ["Productos"],
				summary: "Obtiene todos los productos",
				responses: {
					"200": {
						description: "Listado de productos obtenido correctamente",
						content: {
							"application/json": {
								schema: { $ref: "#/components/schemas/ProductsResponse" }
							}
						}
					},
					"500": {
						description: "Error al consultar los productos",
						content: {
							"application/json": {
								schema: { $ref: "#/components/schemas/ErrorResponse" }
							}
						}
					}
				}
			},
			post: {
				tags: ["Productos"],
				summary: "Crea un producto",
				requestBody: {
					required: true,
					content: {
						"application/json": {
							schema: { $ref: "#/components/schemas/CreateProductRequest" }
						}
					}
				},
				responses: {
					"201": {
						description: "Producto creado correctamente",
						content: {
							"application/json": {
								schema: { $ref: "#/components/schemas/CreateProductResponse" }
							}
						}
					},
					"400": {
						description: "Falta el nombre o el precio del producto",
						content: {
							"application/json": {
								schema: { $ref: "#/components/schemas/ErrorResponse" }
							}
						}
					}
				}
			}
		}
	},
	components: {
		schemas: {
			Product: {
				type: "object",
				properties: {
					id: { type: "integer", example: 1 },
					name: { type: "string", example: "Teclado mecanico" },
					price: { type: "number", example: 249900 }
				}
			},
			CreateProductRequest: {
				type: "object",
				required: ["name", "price"],
				properties: {
					name: { type: "string", example: "Teclado mecanico" },
					price: { type: "number", example: 249900 }
				}
			},
			HealthResponse: {
				type: "object",
				properties: {
					msg: { type: "string", example: "server ok" }
				}
			},
			ProductsResponse: {
				type: "object",
				properties: {
					msg: { type: "string", example: "informacion de los productos" },
					data: {
						type: "array",
						items: { $ref: "#/components/schemas/Product" }
					}
				}
			},
			CreateProductResponse: {
				type: "object",
				properties: {
					msg: { type: "string", example: "producto creado con exito" }
				}
			},
			ErrorResponse: {
				type: "object",
				properties: {
					msg: { type: "string", example: "error del servidor" },
					error: { type: "string", example: "Detalle del error" }
				}
			}
		}
	}
}



module.exports = {
	swaggerDocument
}
