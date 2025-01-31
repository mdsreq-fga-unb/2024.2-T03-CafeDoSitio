import Paginacao from "../../../components/Paginacao";
import ImgContent from "./ImgContent";
import { Title, Text, DivContainer, NossosProdutosdiv, ImagemContainer, BotaoSobreposto, Container, TextoDescricao } from "./styled";

import imagemCafeAssumPretoConteiner from "../../../assets/DetalhesNossosProdutos/NossosProdutos_assumpreto_1.png";
import imagemCafeAssumPretoIcone from "../../../assets/DetalhesNossosProdutos/NossosProdutos_assumpreto_2.png";

import imagemCafeFamiliaSitioConteiner from "../../../assets/DetalhesNossosProdutos/NossosProdutos_familiadositio_1.png";
import imagemCafeFamiliaSitioIcone from "../../../assets/DetalhesNossosProdutos/NossosProdutos_familiadositio_2.png";

import imagemCafeSpecialeConteiner from "../../../assets/DetalhesNossosProdutos/NossosProdutos_speciale_1.png";
import imagemCafeSpecialeIcone from "../../../assets/DetalhesNossosProdutos/NossosProdutos_speciale_5.png";


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
                id="3"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  tincidunt ut laoreet dolore magna"
                buttonText="Conheça a linha Speciale Espresso"
                backgroundImage={imagemCafeSpecialeConteiner}
                iconImage={imagemCafeSpecialeIcone}
            >
            </ImgContent>
            
        </>
    );
}
