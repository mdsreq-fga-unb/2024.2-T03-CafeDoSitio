import React, { useState } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // CSS do <ToastContainer />
import sacService from "../../services/sac.service";

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
    const [nomeSobrenome, setNomeSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [assunto, setAssunto] = useState("Sugestao");  
    const [mensagem, setMensagem] = useState("");
    const [arquivo, setArquivo] = useState(null);

    // Criando o objeto JSON com os dados do formulário
    const Formulario_JSON = {
        nomeSobrenome,
        email,
        telefone,
        assunto,
        mensagem
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sacService.postSac(Formulario_JSON);
    };

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
                {/* Esse componente é preciso colocar pra que apareça o pop up de que o fomrs foi enviado */}
                <ToastContainer /> 
            </Location>

            <Form>
                <Title>Fale Conosco</Title>
                <Label htmlFor="name">Nome e Sobrenome:</Label>
                <Input type="text" id="name" placeholder="Nome e Sobrenome" value={nomeSobrenome} 
                    onChange={(e) => {setNomeSobrenome(e.target.value);}}
                />

                <Label htmlFor="email">Email:</Label>
                <Input type="email" id="email" placeholder="Email" value={email} 
                    onChange={(e) => {setEmail(e.target.value);}}
                />

                <Label htmlFor="phone">Telefone:</Label>
                <Input type="tel" id="phone" placeholder="Telefone" value={telefone} 
                    onChange={(e) => {setTelefone(e.target.value);}}
                />

                <Label htmlFor="subject">Assunto:</Label>
                <Select
                    id="subject"
                    value={assunto}
                    onChange={(e) => {setAssunto(e.target.value);}}
                >
                    <option value="Sugestao">Sugestão</option>
                    <option value="Elogio">Elogio</option>
                    <option value="Duvida">Dúvida</option>
                    <option value="Reclamacao">Reclamação</option>
                    <option value="Parceiria/Patrocinio">Parceiria/Patrocínio</option>
                </Select>


                <Label htmlFor="message">Mensagem:</Label>
                <TextArea 
                    id="message" 
                    rows="5" 
                    placeholder="Mensagem" 
                    value={mensagem} 
                    onChange={(e) => {setMensagem(e.target.value);}}
                >
                </TextArea>

                <Label htmlFor="file">Anexar Arquivo:</Label>
                <FileInput type="file" id="file" />

                <Button type="submit" onClick={handleSubmit}>Enviar</Button>
            </Form>
        </SacSection>
    );
}

export default Sac;