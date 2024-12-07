import nodemailer from "nodemailer";

const send = (to, subject, body, attachments = []) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });
    
    transporter.sendMail({
        from: process.env.MAIL_USER, //esse é o email de quem está enviando
        to, //esse é o email para quem vai receber a mensagem
        subject, //aqui vai o assunto 
        text: body, //aqui é o corpo do email
        attachments // anexos
    });
};

export default {
    send,
}