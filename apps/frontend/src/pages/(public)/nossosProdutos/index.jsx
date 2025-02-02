import Paginacao from "../../../components/Paginacao";
import ImgContent from "./ImgContent";
import { Title, Text, DivContainer, TitleSeloPurezaABIC, DivContainerTitleSeloPurezaABIC, DivContainerSeloPurezaABIC, DivContainerSelosABIC, TextSeloPurezaABIC, ImagemSelosABIC, ImagemSeloPureza, DivContainerTitleSelosABIC, TitleSelosABIC, SubtitleSelosABIC, TextSelosABIC, NossosProdutosdiv, ImagemContainer, BotaoSobreposto, Container, TextoDescricao } from "./styled";

import imagemCafeAssumPretoConteiner from "../../../assets/DetalhesNossosProdutos/NossosProdutos_assumpreto_1.png";
import imagemCafeAssumPretoIcone from "../../../assets/DetalhesNossosProdutos/NossosProdutos_assumpreto_2.png";

import imagemCafeFamiliaSitioConteiner from "../../../assets/DetalhesNossosProdutos/NossosProdutos_familiadositio_1.png";
import imagemCafeFamiliaSitioIcone from "../../../assets/DetalhesNossosProdutos/NossosProdutos_familiadositio_2.png";

import imagemCafeSpecialeConteiner from "../../../assets/DetalhesNossosProdutos/NossosProdutos_speciale_1.png";
import imagemCafeSpecialeIcone from "../../../assets/DetalhesNossosProdutos/NossosProdutos_speciale_5.png";

import imagemSelosDaABIC from "../../../assets/DetalhesNossosProdutos/NossosProdutosSelosABIC_4.png";
import imagemSelosPurezaDaABIC from "../../../assets/DetalhesNossosProdutos/selopureza.png";



export default function NossosProdutos() {
    return (
        <>
            <Paginacao text={"FAMÍLIA DO SÍTIO > NOSSOS PRODUTOS"} />

            <DivContainer>
                <Title>Nossas marcas</Title>
                <Text>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod 
                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
                    quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </Text>
            </DivContainer>

            <ImgContent
                id="1"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  tincidunt ut laoreet dolore magna"
                buttonText="Conheça a linha Assum Preto"
                backgroundImage={imagemCafeAssumPretoConteiner}
                iconImage={imagemCafeAssumPretoIcone}
            >
            </ImgContent>

            <ImgContent
                id="2"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  tincidunt ut laoreet dolore magna"
                buttonText="Conheça a linha Família do Sítio"
                backgroundImage={imagemCafeFamiliaSitioConteiner}
                iconImage={imagemCafeFamiliaSitioIcone}
            >
            </ImgContent>

            
            <ImgContent
                id=""
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  tincidunt ut laoreet dolore magna"
                buttonText="Conheça a linha Speciale Espresso"
                backgroundImage={imagemCafeSpecialeConteiner}
                iconImage={imagemCafeSpecialeIcone}
            >
            </ImgContent>

            <DivContainerTitleSelosABIC>
            <TitleSelosABIC>Selos da ABIC
                <SubtitleSelosABIC>Qualidade</SubtitleSelosABIC>
            </TitleSelosABIC>
            </DivContainerTitleSelosABIC>
        

            <DivContainerSelosABIC>
                <TextSelosABIC>
                    Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim
                    veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex
                    ea commodo consequat.
                </TextSelosABIC>
                    <ImagemSelosABIC src={imagemSelosDaABIC} alt="Selos ABIC" />
            </DivContainerSelosABIC>

            <DivContainerSeloPurezaABIC>
                <ImagemSeloPureza src={imagemSelosPurezaDaABIC} alt="Selo ABIC" />
                <DivContainerTitleSeloPurezaABIC>
                    <TitleSeloPurezaABIC>Pureza</TitleSeloPurezaABIC>
                    <TextSeloPurezaABIC>
                        Lorem ipsum dolor sit amet, consectetuer
                        adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut laoreet dolore magna
                        aliquam erat volutpat. Ut wisi enim ad minim.
                    </TextSeloPurezaABIC>
                </DivContainerTitleSeloPurezaABIC>
            </DivContainerSeloPurezaABIC>

            
        </>
    );
}
