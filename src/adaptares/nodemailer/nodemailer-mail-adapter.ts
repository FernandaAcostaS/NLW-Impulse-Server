import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "deb3a6c13953bf",
      pass: "ce4a23ded0fa32"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail ({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Fernanda Acosta <fernandaacostasantos@gmail.com>',
            subject,
            html: body,
        })
    }
}