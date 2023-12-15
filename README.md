# api-producs

## API de Gestión de Productos Este proyecto consiste en una API para la gestión de productos, proporcionando operaciones básicas de Crear, Leer,Eliminar . La API está desarrollada por luismario2393 y está diseñada para trabajar con una base de datos MongoDB.

## Requisitos Asegúrate de tener instalado:

> Node.js npm (Administrador de paquetes de Node.js) MongoDB (o un servicio de base de datos compatible) Configuración Clonar el Repositorio:

> bash Copy code git clone https://github.com/luismario2393/api-products.git Instalar Dependencias:

> bash Copy code cd api-products npm install Configurar la Base de Datos:

> Crea una base de datos MongoDB. Copia el archivo .env.example a un nuevo archivo llamado .env y actualiza la URL de conexión de la base de datos. utilizar URI base de datos challenge Uso Iniciar el Servidor:

> bash Copy code npm run dev

## Endpoints La API expone los siguientes endpoints:

> Products GET /products: Obtiene la lista de todos los productos. POST /products: Crea un nuevo producto. DELETE /products/:id: Elimina un producto por su ID.

> Brands GET /brands: Obtiene la lista de todas las marcas. POST /brands: Crea una nueva marca. DELETE /brands/:id: Elimina una marca por su ID.

> Discounts GET /discounts: Obtiene la lista de todos los descuentos. POST /discounts: Crea un nuevo descuento. DELETE /discounts/:id: Elimina un descuento por su ID.

> Price GET /price/{user_id}/{name_product}: Obtiene el precio con descuento del producto, si el usuario tiene dicho descuento

## Licencia Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para obtener más detalles.
