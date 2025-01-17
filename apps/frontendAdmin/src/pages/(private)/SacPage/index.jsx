import { SacCard } from "../../../components/SacCard";
import sacService from "../../../services/sac.service.js";
import Paginacao from "../../../components/Paginacao";
import { Section, Space, Select, SacsContainer, ErrorMessageContainer } from "./styled.js";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ROUTES } from "../../../routes/RoutesConstants";
import { BiSolidError } from "react-icons/bi";


const SacPage = () => {
    const [sacs, setSacs] = useState([]);
    const [assuntoSac, setAssuntoSac] = useState("");

    async function findAllSacs() {
        const response = await sacService.getAllSacs(`${assuntoSac}`);
        setSacs(response.data);
    }

    useEffect(() => {
        findAllSacs();
    }, [assuntoSac]);

    return (
        <>
            <Paginacao><Link to={ROUTES.HOME} className="page">Central de Administração</Link> {" > VISUALIZAR SACS"}</Paginacao>
            <Space />

            <Section>
                <h4 style={{color: "#006343", margin: 0}}>Utilize o campo abaixo para escolher o assunto dos Sacs!</h4>
                <Select
                    name="select"
                    id="subject"
                    value={assuntoSac}
                    onChange={(e) => setAssuntoSac(e.target.value)}
                >
                    <option value="">Todos</option>
                    <option value="Sugestao">Sugestão</option>
                    <option value="Elogio">Elogio</option>
                    <option value="Duvida">Dúvida</option>
                    <option value="Reclamacao">Reclamação</option>
                    <option value="Parceria/Patrocinio">Parceria/Patrocínio</option>
                </Select>
            </Section>
            
            <SacsContainer>
                {sacs.length > 0 ? (
                    sacs.map((item, index) => <SacCard key={index} sacs={item} />)
                ) : (
                    <ErrorMessageContainer>
                        <BiSolidError size={60} color="orange" style={{marginRight: 10}}/>
                        <p>Nenhum sac encontrado.</p>
                    </ErrorMessageContainer>
                )}
            </SacsContainer>
        </>
    );
};

export default SacPage;
