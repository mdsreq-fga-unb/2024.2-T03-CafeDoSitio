import Paginacao from "../../../components/Paginacao";
import { 
    Title, 
    Text,
    DivContainer,
    NossosProdutosdiv,
    ImagemContainer,
    BotaoSobreposto,
    Container,
    TextoDescricao,
    ImageContainer,
    ProdutoTitle,
    ProdutoSection,
    ProdutoDescricao,
    ProdutoInfo,
    Disponibilidade,
    DetalhesProduto
} from "./styled";

import imagemCafeAssumPretoConteiner from "../../../assets/DetalhesNossosProdutos/NossosProdutos_assumpreto_1.png";
import imagemCafeAssumPretoIcone from "../../../assets/DetalhesNossosProdutos/NossosProdutos_assumpreto_2.png";

import imagemCafeFamiliaSitioConteiner from "../../../assets/DetalhesNossosProdutos/NossosProdutos_familiadositio_1.png";
import imagemCafeFamiliaSitioIcone from "../../../assets/DetalhesNossosProdutos/NossosProdutos_familiadositio_2.png";

import imagemCafeSpecialeConteiner from "../../../assets/DetalhesNossosProdutos/NossosProdutos_speciale_1.png";
import imagemCafeSpecialeIcone from "../../../assets/DetalhesNossosProdutos/NossosProdutos_speciale_5.png";

import imagemAssumPretoVacuo from "../../../assets/DetalhesNossosProdutos/NossosProdutos_assumpreto_3.png"
import imagemCappucino from "../../../assets/DetalhesNossosProdutos/NossosProdutos_assumpreto_4.png"

export default function NossosProdutosInfo() {
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

            <ProdutoSection>
                <ImageContainer>
                    <img className="img" src={imagemCafeAssumPretoIcone} alt="Cafe Assum Preto" />
                </ImageContainer>

                <ProdutoInfo>
                    <ProdutoTitle>Café Almofada</ProdutoTitle>
                    <ProdutoDescricao>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    </ProdutoDescricao>
                    <Disponibilidade>• <strong>Disponível nas versões 250g e 500g</strong></Disponibilidade>

                    <DetalhesProduto>
                        <div>
                            <p><strong>Apresentação:</strong> Café torrado e moído.</p>
                            <p><strong>Método indicado:</strong> Ideal para filtros de papel ou polipropileno e coador de pano.</p>
                            <p><strong>Tipo de café:</strong> 100% Arábica</p>
                            <p><strong>Aroma:</strong> Intenso</p>
                            <p><strong>Sabor:</strong> Intenso</p>
                        </div>
                        <div>
                            <p><strong>Bebida:</strong> Dura</p>
                            <p><strong>Corpo:</strong> Encorpado</p>
                            <p><strong>Moagem:</strong> Média</p>
                            <p><strong>Torração:</strong> Média</p>
                        </div>
                    </DetalhesProduto>
                </ProdutoInfo>
            </ProdutoSection>

            <ProdutoSection>
                <ProdutoInfo>
                    <ProdutoTitle>Café a Vácuo</ProdutoTitle>
                    <ProdutoDescricao>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    </ProdutoDescricao>
                    <Disponibilidade>• <strong>Disponível nas versões 250g e 500g</strong></Disponibilidade>

                    <DetalhesProduto>
                        <div>
                            <p><strong>Apresentação:</strong> Café torrado e moído.</p>
                            <p><strong>Método indicado:</strong> Ideal para filtros de papel ou polipropileno e coador de pano.</p>
                            <p><strong>Tipo de café:</strong> 100% Arábica</p>
                            <p><strong>Aroma:</strong> Intenso</p>
                            <p><strong>Sabor:</strong> Intenso</p>
                        </div>
                        <div>
                            <p><strong>Bebida:</strong> Dura</p>
                            <p><strong>Corpo:</strong> Encorpado</p>
                            <p><strong>Moagem:</strong> Média</p>
                            <p><strong>Torração:</strong> Média</p>
                        </div>
                    </DetalhesProduto>
                </ProdutoInfo>

                <ImageContainer>
                    <img className="img" src={imagemAssumPretoVacuo} alt="Cafe Assum Preto" />
                </ImageContainer>
            </ProdutoSection>

            <ProdutoSection>
                <ImageContainer>
                    <img className="img" src={imagemCappucino} alt="Cafe Assum Preto" />
                </ImageContainer>

                <ProdutoInfo>
                    <ProdutoTitle>Cappuccino</ProdutoTitle>
                    <ProdutoDescricao>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
                    </ProdutoDescricao>
                    <Disponibilidade>• <strong>Disponível nos sabores Tradicional e Canela</strong></Disponibilidade>

                    <DetalhesProduto>
                        <div>
                            <p><strong>Peso Líquido:</strong> 200g</p>
                            <p><strong>Apresentação:</strong> Mistura para preparo de cappuccino sabor Tradicional.</p>
                            <p><strong>Corpo:</strong> Encorpad o</p>
                            <p><strong>Moagem:</strong> Fina</p>                            
                        </div>
                        <div>
                            <p><strong>Bebida:</strong> Dura</p>
                            <p><strong>Corpo:</strong> Encorpado</p>
                            <p><strong>Moagem:</strong> Média</p>
                            <p><strong>Torração:</strong> Média</p>
                        </div>
                    </DetalhesProduto>
                </ProdutoInfo>
            </ProdutoSection>

            
        </>
    );
}
