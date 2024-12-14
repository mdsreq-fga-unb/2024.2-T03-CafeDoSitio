import {
    CardContainer,
    CardHeader,
    CardInfo,
    CardMessage
} from './styled.js'

export function SacCard({ sacs }) {
    return (        
        <CardContainer>
            <CardHeader>{sacs.assunto}</CardHeader>
            <CardInfo>
                <p>{sacs.nomeSobrenome}</p>
                <p>{sacs.email}</p>
                <p>{sacs.telefone}</p>
            </CardInfo>
            <CardMessage>{sacs.mensagem}</CardMessage>
        </CardContainer>
    );
}