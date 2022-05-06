import express from 'express';
import nodemailer from 'nodemailer';
import { routes } from './routes';
import { prisma } from './prisma';


//GET, POST, PUT, DELETE, PATCH

//GET = buscar informações
//POST = cadastrar informações
//PUT = Atualizar informações de uma entidade
//PATCH = Atualizar uma informação única de uma entidade
//DELETE = Deletar uma informação

const app = express();
app.use(routes);

app.use(express.json());


app.listen(3333, () => {
    console.log('HTTP server running!')
});



//SQLite 
//Prisma