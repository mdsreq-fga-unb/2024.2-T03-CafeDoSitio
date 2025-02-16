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
                    <Link to={urlDetalhes} style={{ textDecoration: "none", color: "inherit"}}>
                        <BotaoSobreposto>
                            {props.buttonText}
                            <FaArrowRight style={{transform: "rotate(-45deg)", marginLeft: "10px"}} />           
                        </BotaoSobreposto>
                    </Link> 
                    <img className="img-background" src={props.backgroundImage} alt="Background image" />
                </Container>
            </ImagemContainer>
        </>
    );
}
