import { useState } from 'react';
import {
    CardContainer,
    CardHeader,
    CardInfo,
    CardMessage
} from './styled.js'

export function SacCard({ sacs }) {
    let statusMsg;
    sacs.status !== false ? statusMsg = "Concluído" : statusMsg = "Em Aberto";
    
    const [status, setStatus] = useState();
    

    return (        
        <CardContainer>
            <CardHeader>{sacs.assunto}</CardHeader>
            <CardInfo>
                <p>Nome: {sacs.nomeSobrenome}</p>
                <p>Email: {sacs.email}</p>
                <p>Telefone: {sacs.telefone}</p>
                <p>Status: {statusMsg}</p>
            </CardInfo>
            <CardMessage>{sacs.mensagem}</CardMessage>
        </CardContainer>
    );
}