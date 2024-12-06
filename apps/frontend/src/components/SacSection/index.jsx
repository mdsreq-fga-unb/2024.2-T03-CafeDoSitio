import React from "react";
import { 
    SacSection,
    Location,
    Form,
    Title,
    Label,
    Input,
    TextArea,
    Button,
    Select, // Adicionando um Select para o campo de Assunto
    FileInput // Novo componente para o campo de anexar arquivo
} from "./styled";

function Sac() {
    return (
        <SacSection>
            <Location>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15350.606789028072!2d-48.0269256!3d-15.8748932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2d87432ac44d%3A0xff6ae8c97e66c8b8!2zQ2Fmw6kgZG8gU8OtdGlv!5e0!3m2!1spt-BR!2sbr!4v1733509279879!5m2!1spt-BR!2sbr"
                    width="400"
                    height="450"
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" 
                ></iframe>
                <h2>Localização</h2>
                <p>QS 09 RUA 101 LOTE 04 - Taguatinga</p>
                <p>Distrito Federal - CNPJ: 00.452.002/0001-48</p>
                <p>Café do Sítio Indústria e Comércio Ltda</p>
            </Location>

            <Form>
                <Title>Fale Conosco</Title>
                <Label htmlFor="name">Nome e Sobrenome:</Label>
                <Input type="text" id="name" placeholder="Nome e Sobrenome" />

                <Label htmlFor="email">Email:</Label>
                <Input type="email" id="email" placeholder="Email" />

                <Label htmlFor="phone">Telefone:</Label>
                <Input type="tel" id="phone" placeholder="Telefone" />

                <Label htmlFor="subject">Assunto:</Label>
                <Select id="subject">
                    <option value="suporte">Sugestão</option>
                    <option value="informacoes">Elogio</option>
                    <option value="outros">Dúvida</option>
                    <option value="outros">Reclamação</option>
                    <option value="outros">Parceiria/Patrocínio</option>
                </Select>

                <Label htmlFor="message">Mensagem:</Label>
                <TextArea id="message" rows="5" placeholder="Mensagem"></TextArea>

                <Label htmlFor="file">Anexar Arquivo:</Label>
                <FileInput type="file" id="file" />

                <Button type="submit">Enviar</Button>
            </Form>
        </SacSection>
    );
}

export default Sac;