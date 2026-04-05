# Supermercado - MarketSoft

## Sobre el proyecto

Este sistema constituye el núcleo de servicios (API REST) para la gestión integral de un supermercado - MarketSoft. Ha sido desarrollado como proyecto principal para la asignatura **Programación IV** de la **Universidad de Manizales**.

El sistema está construido con la arquitectura cliente-servidor y MVC.

### 🛠️ Stack Tecnológico
- [![Nodejs]][nodejs-url]
- [![Express]][express-url]
- [![PostgreSQL]][postgresql-url]
- [![Sequelize]][sequelize-url]

> Este proyecto no utiliza dependencias externas como nodemon o dotenv. Ya que aprovecha las capacidades nativas de Node.js > v20 que trae soporte nativo para ambos

### 👤 Autor
- Estudiante: Jhon Jairo Hernandez Castañeda

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
4. Iniciar el servidor local
   ```sh
   npm run start
   ```

<!-- MARKDOWN LINKS & IMAGES -->

[postgresql]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[postgresql-url]: https://www.postgresql.org/

[nodejs]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[nodejs-url]: https://nodejs.org/

[express]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[express-url]: https://expressjs.com/

[sequelize]: https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white
[sequelize-url]: https://sequelize.org/