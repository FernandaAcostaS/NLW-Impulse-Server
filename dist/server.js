"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
//GET, POST, PUT, DELETE, PATCH
//GET = buscar informações
//POST = cadastrar informações
//PUT = Atualizar informações de uma entidade
//PATCH = Atualizar uma informação única de uma entidade
//DELETE = Deletar uma informação
const app = (0, express_1.default)();
app.use(routes_1.routes);
app.use(express_1.default.json());
app.listen(3333, () => {
    console.log('HTTP server running!');
});
//SQLite 
//Prisma
