import express from 'express';
import nodemailer from 'nodemailer';
import { NodemailerMailAdapter } from './adaptares/nodemailer/nodemailer-mail-adapter';
import { prisma } from './prisma';
import { PrismaFeedbacksRepository } from './repositores/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';

export const routes = express.Router();

routes.post('/feedbacks', async (req, res) => { //req- tudo que ta vindo pra mim quando o usuário acessa a informação. res, resposta para o usuário 
    const { type, comment, screenshot } = req.body;
    
    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemaierMailAdapter = new NodemailerMailAdapter()
    
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbacksRepository,
        nodemaierMailAdapter
    )

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    })
    
    return res.status(201).send();//quando o usuário acessa a informação ele recebe um hello world
});