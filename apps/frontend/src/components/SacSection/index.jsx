import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // CSS do <ToastContainer />
import sacService from "../../services/sac.service";
import { IoIosPin } from "react-icons/io";
import { PuffLoader } from "react-spinners";

import { 
    SacSection,
    Location,
    Form,
    Title,
    Label,
    Input,
    TextArea,
    Button,
    Select, 
    FileName,
    FileInput,
    FileEscondido,
    FileInputLabel
} from "./styled";

function Sac() {
    const [nomeSobrenome, setNomeSobrenome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [assunto, setAssunto] = useState("Sugestao");  
    const [mensagem, setMensagem] = useState("");
    const [arquivo, setArquivo] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    
    const Formulario_JSON = {
        nomeSobrenome,
        email,
        telefone,
        assunto,
        mensagem
    };

    const handleArquivo = (e) => {
        const file = e.target.files[0];
        if (file && file.size > 15 * 1024 * 1024) { // 15MB em bytes
            setArquivo(null); 
            toast.error("O arquivo é muito grande! O limite é de 15MB.");
        } else {
            setArquivo(file);
        }
    };

    const validarTelefone = (telefone) => {
        const regex = /^\(\d{2}\) \d{5}-\d{4}$/; // Formato (DDD) 00000-0000
        return regex.test(telefone);
    };
    
    const formatarTelefone = (valor) => {
        // Remove tudo que não é dígito
        const apenasDigitos = valor.replace(/\D/g, "");

        // Aplica a máscara (DDD) 00000-0000
        if (apenasDigitos.length <= 2) {
            return `(${apenasDigitos}`;
        } else if (apenasDigitos.length <= 11) {
            return `(${apenasDigitos.slice(0, 2)}) ${apenasDigitos.slice(2, 7)}-${apenasDigitos.slice(7, 11)}`;
        } else {
            return `(${apenasDigitos.slice(0, 2)}) ${apenasDigitos.slice(2, 7)}-${apenasDigitos.slice(7, 11)}`;
        }
    };
    
    // Função chamada ao mudar o valor do input
    const handleTelefone = (e) => {
        const valorFormatado = formatarTelefone(e.target.value);
        setTelefone(valorFormatado);
    };

    const formData = new FormData();

    if (arquivo) {
        formData.append("arquivo", arquivo); // Inclui o arquivo apenas se existir
    }

    formData.append("data", JSON.stringify(Formulario_JSON));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Ativa o carregamento

        if(!nomeSobrenome || !email || !telefone || !mensagem) {
            setIsLoading(false); // Desativa o carregamento
            return toast.error("Preencha todos os campos!");
        }
        if(!validarTelefone(telefone)) {
            setIsLoading(false); // Desativa o carregamento
            return toast.error("Telefone inválido! Use o formato (DDD) 00000-0000.");
        }
    
        try {
            await sacService.postSac(formData); // Chama o serviço que consome a API
        } catch (error) {
            console.error("Erro ao enviar o formulário:", error);
        } finally {
            setIsLoading(false); // Desativa o carregamento
        }
    };
    

    return (
        <SacSection> 
            <Location>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15350.606789028072!2d-48.0269256!3d-15.8748932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2d87432ac44d%3A0xff6ae8c97e66c8b8!2zQ2Fmw6kgZG8gU8OtdGlv!5e0!3m2!1spt-BR!2sbr!4v1733509279879!5m2!1spt-BR!2sbr"
                    width="300"
                    height="300"
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" 
                ></iframe>
                <h2>Localização</h2>
                <div className="caixinha">
                    <IoIosPin color="white" size={30}/>
                    <div className="infos">
                        <p style={{marginTop: 0, marginBottom: 3}}>QS 09 RUA 101 LOTE 04 - Taguatinga</p>
                        <p style={{marginTop: 0, marginBottom: 3}}>Distrito Federal - CNPJ: 00.452.002/0001-48</p>
                        <p style={{marginTop: 0, marginBottom: 0}}>Café do Sítio Indústria e Comércio Ltda</p>
                    </div>
                </div>
                {/* Esse componente é preciso colocar pra que apareça o pop up de que o forms foi enviado */}
                <ToastContainer /> 
            </Location>

            <Form>
                <Title>Fale Conosco</Title>
                <h5 style={{color: "#006343", marginTop: 0}}>Para dúvidas e/ou sugestões, entre em contato conosco!</h5>
                
                <Label htmlFor="name" style={{color: "#006343"}}>Nome e Sobrenome:</Label>
                <Input type="text" id="name" placeholder="Nome e Sobrenome" value={nomeSobrenome} 
                    onChange={(e) => {setNomeSobrenome(e.target.value);}}
                />

                <Label htmlFor="email" style={{color: "#006343"}}>Email:</Label>
                <Input type="email" id="email" placeholder="Email" value={email} 
                    onChange={(e) => {setEmail(e.target.value);}}
                />

                <Label htmlFor="phone" style={{color: "#006343"}}>Telefone:</Label>
                <Input type="tel" id="phone" placeholder="Telefone" value={telefone} 
                    onChange={handleTelefone}
                    
                />

                <Label htmlFor="subject" style={{color: "#006343"}}>Assunto:</Label>                
                <Select
                    id="subject"
                    value={assunto}
                    onChange={(e) => {setAssunto(e.target.value);}}
                >
                    <option value="Sugestao">Sugestão</option>
                    <option value="Elogio">Elogio</option>
                    <option value="Duvida">Dúvida</option>
                    <option value="Reclamacao">Reclamação</option>
                    <option value="Parceria/Patrocinio">Parceria/Patrocínio</option>
                </Select>


                <Label htmlFor="message" style={{color: "#006343"}}>Mensagem:</Label>
                <TextArea 
                    id="message" 
                    rows="5" 
                    placeholder="Mensagem" 
                    value={mensagem} 
                    onChange={(e) => {setMensagem(e.target.value);}}
                >
                </TextArea>

                <FileInput>
                    <FileEscondido
                        type="file"
                        id="file"
                        onChange={handleArquivo}
                    />
                    <FileInputLabel htmlFor="file">Inserir arquivo</FileInputLabel>
                    {arquivo && <FileName>{arquivo.name} selecionado!</FileName>}
                </FileInput>

                <Button type="submit" onClick={handleSubmit} disabled={isLoading}>
                    {isLoading ? "Enviando..." : "Enviar"}
                </Button>

                {isLoading && (
                    <div style={{ textAlign: "center", marginTop: "1rem" }}>
                        <PuffLoader color="#006343" />
                    </div>
                )}
            </Form>
        </SacSection>
    );
}

export default Sac;