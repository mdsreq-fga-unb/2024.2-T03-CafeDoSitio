import nodemailer from "nodemailer";
import dotenv from 'dotenv';

const send = (to, subject, body) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
        }
    });
    
    transporter.sendMail({
        from: process.env.MAIL_USER,
        to,
        subject,
        text: body
    });
};

export default {
    send,
}