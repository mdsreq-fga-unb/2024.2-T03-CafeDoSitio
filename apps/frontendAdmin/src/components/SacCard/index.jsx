import { useState } from 'react';
import {
    CardContainer,
    CardHeader,
    CardInfo,
    CardMessage,
    CardStatus,
    StatusDropdown,
    Id
} from './styled.js';
import sacService from '../../services/sac.service.js';

export function SacCard({ sacs }) {
    const [status, setStatus] = useState(sacs.status);
    const [showDropdown, setShowDropdown] = useState(false);

    // Alternar dropdown
    const toggleDropdown = () => setShowDropdown(!showDropdown);

    // Função para mudar status
    const handleStatusChange = (newStatus) => {
        setStatus(newStatus);
        setShowDropdown(false); // Fecha o dropdown após selecionar

        const Json = {status: newStatus};// É necessário declarar aqui para que a variavel seja atualizada conforme a função é chamada
        sacService.updateSacStatus(Json, sacs._id);// Faz a requisição do backend
    };
  
    return (        
        <CardContainer>
            <CardStatus onClick={toggleDropdown} status={status} value={status} onChange={(e) => {setStatus(e.target.value);}}>
                {status ? 'Concluído' : 'Em Aberto'}
            </CardStatus>
            {showDropdown && (
                <StatusDropdown >
                    <li onClick={() => handleStatusChange(true)}>Concluído</li>
                    <li onClick={() => handleStatusChange(false)}>Em Aberto</li>
                </StatusDropdown>
            )}
            <CardHeader>{sacs.assunto}</CardHeader>
            <CardInfo>
                <p><strong>Nome:</strong> {sacs.nomeSobrenome}</p>
                <p><strong>Email:</strong> {sacs.email}</p>
                <p><strong>Telefone:</strong> {sacs.telefone}</p>
            </CardInfo>
            <CardMessage>{sacs.mensagem}</CardMessage>
            <Id><strong>Identificador: </strong>{sacs.identificador}</Id>
        </CardContainer>
    );
}
