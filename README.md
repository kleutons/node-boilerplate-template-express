# NODE BOILERPLATE - TYPESCRIPT EDITION
<img src="./.github/assets/node.ExpressTs.png" alt="Logo" height="300">


### Don't start a new Node project from zero!
### Use this simple **Nodejs** boilerplate with pre-configured **Typescript** in a modern way.

<br />
  <!-- Badges -->
<div align="center">

[![Typesript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://github.com/kleutons) 
[![NODE.JS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://github.com/kleutons)
[![EXPRESS](https://img.shields.io/badge/Express-white?style=for-the-badge&logo=express&logoColor=black)](https://github.com/kleutons)

</div>

<br />

# 🚀 Technologies

This code source was developed with the following items:

### 📦 Dependencies

- [typescript][typescript-npm] - Superset for application scale JavaScript development
- [tsx][tsx-npm] - TypeScript Execute (tsx): Enable Node.js to run TypeScript
- [tsup][tsup-npm] - Bundle your TypeScript library with no config, powered by esbuild
- [cors][cors] - CORS is a node.js package for providing
- [express][express] - Fast, unopinionated, minimalist web framework for Node.js.
- [@types/node][@types/node-npm] - type definitions for node
- [@types/cors][@types/node-npm] - type definitions Cors
- [@types/express][@types/express] - type definitions for Express

### 🟢 Layered Architecture
- controlles
- data (repositories)
- services 

### 💻 Use Routes
- Main Route
  - `GET /`  Response: { "message": "Server started" }
- Route List Itens
  - `GET /items`  Response: [ { "id": "1", "name": "Item 1" }, { "id": "2", "name": "Item 2" } ]
  - `search (opcional)` - Name search
- Route Update Itens
  - `PUT /items`  Response: 204 - No Content
- Route Delete Itens
  - `DELETE /items/:id`  Response: 204 - No Content


### 📄 Files

- `.gitignore` - Ignore folders like node_modules
- `.env` - Enviroment variables
- `tsconfig.json` - Typescript configure Options

### ⚡ Scripts

- `npm run dev`: Runs the server in development mode with environment variables loaded from the .env file.
- `npm run build`: Compiles TypeScript files to JavaScript in the build directory.
- `npm run start:build`: Compiles the project and runs the compiled version from the build directory.

# 👨‍💻 How To Use

click in **[Use this template]** OR

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js v20+](https://nodejs.org/en/) + [NPM v10+](https://nodejs.org/en/) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/kleutons/node-boilerplate-template-ts

# Go into the repository
$ cd node-boilerplate-template-ts

# Install dependencies
$ npm install

# Update All Packages  
$ npm update
  
# To update all dependencies listed in your package.json to the latest stable version.
$ npx npm-check-updates -u
$ npm install

```
## Author

| [<img src="https://avatars3.githubusercontent.com/u/106082564?s=96&v=4"><br><sub>Kleuton Novais</sub>](https://github.com/kleutons) |
| :---------------------------------------------------------------------------------------------------------------------------------------: |
|                                            [Linkedin](https://www.linkedin.com/in/kleuton-novais/)                                             |