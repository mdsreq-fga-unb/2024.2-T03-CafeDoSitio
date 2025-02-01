import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Paginacao from "../../../components/Paginacao";
import Sticker from "../../../components/Sticker";
import { TimelineCard } from "../../../components/TimelineCard";
import imagemArvores from "../../../assets/arvores.jpg"
import imagemVideo from "../../../assets/video.jpg"
import imagemBazar from "../../../assets/bazar.jpg"
import imagemHorta from "../../../assets/horta.jpg"
import imagemGrafico from "../../../assets/grafico.png"
import imagemCampo from "../../../assets/campo.jpg"

import {
    Text,
    Title,
    Space,
    ImageWrapper,
    DivStyled,
    DivImagem,
    DivTexto,
    DivOverlay
} from "./styeld"


export default function SocialActionsPage() {

    return(
        <>
            <Paginacao text={"FAMÍLIA DO SÍTIO > SITIO VERDE"} />
            <Space/>

            <Title>Nossas iniciativas</Title>
            <Text>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam. Ut wisi enim ad minim veniam. Ut wisi enim
                ad minim veniam. 
            </Text>
            <Space/>

            <DivImagem>
                <img src={imagemArvores} alt="video falso" style={{ width: "100%", height: "auto", objectFit: "contain",  display: "block", filter: "brightness(20%)  hue-rotate(-0.9turn)"}} />
                <DivTexto>Lorem ipsum dolor sit amet, consectetuer adipiscing elit volutpat.</DivTexto>
            </DivImagem>
            <DivStyled>
                <Sticker title={"PLACAS FOTOVOLTAICAS"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod tincidunt utlaoreet dolore magna aliquam erat volutpat. Ut wisienim ad minim veniam."}/>            
                <ImageWrapper>
                    <img src={imagemVideo} alt="video falso" style={{ width: "100%", height: "auto", objectFit: "contain"}} />
                </ImageWrapper>
            </DivStyled>
            <DivStyled>
                <img src={imagemGrafico} alt="grafico" style={{ width: "100%", height: "auto", objectFit: "contain" }}/>
                <Sticker title={"PROGRAMA 5S"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod tincidunt utlaoreet dolore magna aliquam erat volutpat. Ut wisienim ad minim veniam."}/>
            </DivStyled>
            <DivStyled>
                <Sticker title={"A GRANDE FAMÍLIA DO SÍTIO: BAZAR"} text={"Lorem ipsum dolor sit amet, consectetuer adipiscingelit, sed diam nonummy nibh euismod tincidunt utlaoreet dolore magna aliquam erat volutpat. Ut wisienim ad minim veniam."}/>
                <ImageWrapper>
                    <img src={imagemBazar} alt="bazar da grande familia" style={{ width: "100%", height: "auto", objectFit: "contain" }}/>
                </ImageWrapper>
            </DivStyled>
            <DivImagem>                     
                <img src={imagemCampo} alt="video falso" style={{ width: "100%", height: "auto", objectFit: "contain",  display: "block", filter: "brightness(20%) sepia(1) saturate(3) hue-rotate(70deg)"}} />                       
            </DivImagem>
        </>
    );

}