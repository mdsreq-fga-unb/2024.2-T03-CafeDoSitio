import React from "react";
import {
    Title,
    Text,
    Container,
    Background
} from "./styled"

function Sticker({title, text}){
    return (    
        <Background className="fundo">
            <Container className="container">
                <Title className="titulo">{title}</Title>
                <Text className="texto">{text}</Text>
            </Container>
        </Background>        
    )
};

export default Sticker;