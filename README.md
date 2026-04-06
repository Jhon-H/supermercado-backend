# Supermercado - MarketSoft

## Sobre el proyecto

Este sistema constituye los servicios para la gestión de un supermercado - MarketSoft. Ha sido desarrollado como proyecto para la asignatura **Programación IV** de la **Universidad de Manizales**.

El sistema está construido con la arquitectura cliente-servidor y MVC.

### 🛠️ Stack Tecnológico

- [![Nodejs]][nodejs-url]
- [![Express]][express-url]
- [![PostgreSQL]][postgresql-url]
- [![Sequelize]][sequelize-url]

> Este proyecto no utiliza dependencias externas como nodemon o dotenv. Ya que aprovecha las capacidades nativas de Node.js > v20 que trae soporte nativo para ambos

### 👤 Autor

- **Jhon Jairo Hernandez Castañeda**
  - Encargado de la construcción completa: controllers, servicios, modelos, manejo de errores, scaffolding inicial con Express.js

## Iniciar proyecto

Para ejecutar este proyecto localmente, por favor siga las instrucciones a continuación

### ⚙️ Prerrequisitos

- npm
  ```sh
  npm install npm@latest -g
  ```
- node.js
  - Si usa [nvm](https://github.com/nvm-sh/nvm), ejecute `nvm use`
  - Si no usa [nvm](https://github.com/nvm-sh/nvm) o no funcionó el comando anterior, instale la versión especificada en el archivo `.nvmrc`

### 📥 Instalación

1. Clonar el repositorio
   ```sh
   git clone https://github.com/Jhon-H/supermercado-backend.git
   ```
2. Instalar las dependencias
   ```sh
   cd supermercado-backend && npm install
   ```
3. Crea un archivo de variables de entorno a partir de la plantilla. Agregue los valores faltantes

   ```sh
   cp .env.template .env

   # completar variables vacias
   DB_USER=xxx
   ```

4. Preparar la Base de Datos: Debe crear la base de datos manualmente
   ```sh
   CREATE DATABASE supermercado;
   ```
5. Iniciar el servidor local
   ```sh
   npm run start
   ```
6. Acceder a la documentación Swagger
   ```
   http://localhost:3000/api/docs
   ```

### 🔎 Validaciones e integridad de datos

Las validaciones como email único, integridad referencial y restricciones de campos se delegan a la base de datos a través de Sequelize (en la definición de los modelos). Al insertar o actualizar registros, estos errores son capturados en la capa de servicios y se transforman en respuestas claras para el usuario:

- **400** – Validación de campos (precio <= 0, stock negativo, formato de email, etc.)
- **404** – Recurso no encontrado
- **409** – Conflicto de unicidad (email duplicado)
- **500** – Error interno del servidor

## Ejemplos

### 📘 Documentación Swagger

Una vez el servidor esté corriendo, puede explorar y probar todos los endpoints desde la interfaz web de Swagger en:

```
http://localhost:3000/api/docs
```

Allí encontrará cada endpoint documentado con sus parámetros, cuerpos de solicitud esperados y los posibles códigos de respuesta (200, 201, 400, 404, 409, 500).

### 🌱 Seed de datos iniciales

Al iniciar el desarrollo o pruebas, puede ejecutar el endpoint de seed para poblar la base de datos con datos de ejemplo. **Importante:** este endpoint elimina todos los datos existentes antes de insertar los nuevos.

```
POST /api/seeds
```

No requiere body. Crea automáticamente:

- 3 usuarios (1 admin, 2 cajeros)
- 2 proveedores
- 6 productos (3 por proveedor)
- 2 ventas con sus detalles (una con 5 productos y otra con 2)
- 1 usuario sin ventas (para pruebas de consultas)

### 🧪 Ejemplos de uso de la API

A continuación se muestran algunos ejemplos de los servicios principales.

**Crear un usuario**

```
POST /api/users
```

```json
{
  "name": "Laura Gómez",
  "email": "laura@mail.com",
  "role": "cajero"
}
```

Crea la usuaria Laura Gómez con rol de cajero en la base de datos.

---

**Obtener todos los usuarios**

```
GET /api/users
```

Retorna la lista completa de usuarios ordenados por email.

---

**Crear un proveedor**

```
POST /api/providers
```

```json
{
  "name": "Frutas Tropicales",
  "phone": "3155551234",
  "email": "frutas@mail.com",
  "city": "Pereira"
}
```

Registra al proveedor Frutas Tropicales de la ciudad de Pereira.

---

**Crear un producto**

```
POST /api/products
```

```json
{
  "name": "Manzana Roja 1kg",
  "description": "Manzanas rojas importadas",
  "price": 5600,
  "stock": 40,
  "providerId": 1
}
```

Agrega el producto Manzana Roja asociado al proveedor con ID 1.

---

**Actualizar el stock de un producto**

```
PUT /api/products/1
```

```json
{
  "stock": 200
}
```

Actualiza el stock del producto con ID 1 a 200 unidades.

---

**Eliminar un producto**

```
DELETE /api/products/1
```

Elimina, usando soft delete, el producto con ID 1. Si el producto tiene ventas asociadas, la eliminación será rechazada por las restricciones de integridad (**OnDelete Restrict**).

---

**Crear una venta**

```
POST /api/sales
```

```json
{
  "userId": 1,
  "details": [
    { "productId": 1, "quantity": 3 },
    { "productId": 2, "quantity": 1 }
  ]
}
```

Crea una venta asociada al usuario con ID 1. El **total se calcula automáticamente** a partir del precio actual de cada producto multiplicado por la cantidad. También se crean los detalles de venta correspondientes.

---

**Obtener una venta con sus detalles**

```
GET /api/sales/1
```

Obtiene la información de la venta con ID 1, incluyendo el usuario que la realizó y los productos comprados.

<!-- MARKDOWN LINKS & IMAGES -->

[postgresql]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[postgresql-url]: https://www.postgresql.org/
[nodejs]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[nodejs-url]: https://nodejs.org/
[express]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[express-url]: https://expressjs.com/
[sequelize]: https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white
[sequelize-url]: https://sequelize.org/
