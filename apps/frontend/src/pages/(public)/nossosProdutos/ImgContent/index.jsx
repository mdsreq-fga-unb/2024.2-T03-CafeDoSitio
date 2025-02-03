import { ImagemContainer, BotaoSobreposto, Container, TextoDescricao, Rotate } from "./styled";
import { FaArrowRight } from "react-icons/fa"; // Ícones do Font Awesome
import { Link } from "react-router-dom";

export default function ImgContent(props) {
    const urlDetalhes = `/produtos/${props.id}`;

    return (
        <>
            <ImagemContainer id="imagem-1">
                <Container>
                <TextoDescricao style={{ color: props.textColor || "white" }}>
                    {props.text}
                </TextoDescricao>
                    <BotaoSobreposto>
                        <Link to={urlDetalhes} style={{ textDecoration: "none", color: "inherit"}}>
                        {props.buttonText}
                        <FaArrowRight style={{transform: "rotate(-45deg)", marginLeft: "10px"}} />
                        </Link>               
                    </BotaoSobreposto>
                    <img className="img-background" src={props.backgroundImage} alt="Background image" />
                    <img className="img-icon" src={props.iconImage} alt="Icone saco cafe" />
                </Container>
            </ImagemContainer>
        </>
    );
}
