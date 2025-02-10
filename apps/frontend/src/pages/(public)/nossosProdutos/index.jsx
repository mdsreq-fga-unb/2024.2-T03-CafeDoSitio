import Paginacao from "../../../components/Paginacao";
import ImgContent from "./ImgContent";
import { Title, Text, DivContainer, DivContainerEncontreNossosProdutos, DivContainerSelosABIC, ImagemSelosABIC, DivContainerTitleSelosABIC, TextSelosABIC, Space } from "./styled";
import imagemCafeAssumPretoConteiner from "../../../assets/DetalhesNossosProdutos/Nossos-Produtos_assumnovo.png";
import imagemCafeFamiliaSitioConteiner from "../../../assets/DetalhesNossosProdutos/NossosProdutos_familiadositio_1novo.png";
import imagemCafeSpecialeConteiner from "../../../assets/DetalhesNossosProdutos/Nossos-Produtos_specialenovo.png";
import imagemSelosDaABIC from "../../../assets/DetalhesNossosProdutos/NossosProdutosSelosABIC_4.png";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/RoutesConstants";

export default function NossosProdutos() {
    return (
        <>
            <Paginacao>
                <Link className="page" to={ROUTES.MAIN}>Família do Sítio</Link>
                {" > "}
                <span>Nossos Produtos</span>
            </Paginacao>
            <Space />

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
                buttonText="Conheça a linha Família do Sítio"
                backgroundImage={imagemCafeFamiliaSitioConteiner}
            >
            </ImgContent>

            
            <ImgContent
                id="2"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  tincidunt ut laoreet dolore magna"
                buttonText="Conheça a linha Speciale Espresso"
                backgroundImage={imagemCafeSpecialeConteiner}
            >
            </ImgContent>

            <ImgContent
                id="3"
                text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod  tincidunt ut laoreet dolore magna"
                buttonText="Conheça a linha Assum Preto"
                backgroundImage={imagemCafeAssumPretoConteiner}
                textColor="black"
            >
            </ImgContent>

            
        
            

            <DivContainerSelosABIC>
            <DivContainerTitleSelosABIC>
                <Title>Qualidade</Title>
                <TextSelosABIC>
                    Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim
                    veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex
                    ea commodo consequat.
                </TextSelosABIC>
                </DivContainerTitleSelosABIC>
                    <ImagemSelosABIC src={imagemSelosDaABIC} alt="Selos ABIC" />
            </DivContainerSelosABIC>

            <DivContainerEncontreNossosProdutos>
                <Title>Encontre nossos produtos</Title>
                <TextSelosABIC>
                    Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim
                    veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex
                    ea commodo consequat.
                </TextSelosABIC>
            </DivContainerEncontreNossosProdutos>
            
        </>
    );
}
