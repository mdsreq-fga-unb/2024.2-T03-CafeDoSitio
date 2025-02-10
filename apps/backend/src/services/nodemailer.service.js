import nodemailer from "nodemailer";

const send = async (to, subject, htmlBody, attachments = []) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail', // Verifique se você está usando o Gmail ou outro provedor
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS // Certifique-se de usar uma senha de app
            }
        });

        // Configuração do e-mail
        const mailOptions = {
            from: process.env.MAIL_USER, // E-mail do remetente
            to, // E-mail do destinatário
            subject, // Assunto
            html: htmlBody, // Corpo do email em HTML
            attachments // Anexos
        };

        // Enviando o e-mail
        const info = await transporter.sendMail(mailOptions);
        //console.log("E-mail enviado com sucesso:", info.messageId);
    } catch (error) {
        console.error("Erro ao enviar e-mail:", error);
        throw error; // Repassa o erro para o controller tratar
    }
};

export default {
    send,
};
