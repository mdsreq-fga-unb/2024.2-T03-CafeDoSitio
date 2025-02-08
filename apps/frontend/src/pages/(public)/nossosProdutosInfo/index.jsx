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

import { useParams } from "react-router-dom";

import imagemCafeAssumPretoConteiner from "../../../assets/DetalhesNossosProdutos/NossosProdutos_assumpreto_1.png";
import imagemCafeAssumPretoIcone from "../../../assets/DetalhesNossosProdutos/NossosProdutos_assumpreto_2.png";
import imagemCafeAssumPretoVacuo from "../../../assets/DetalhesNossosProdutos/NossosProdutos_assumpreto_3_copia.png"
import imagemCafeAssumCappucino from "../../../assets/DetalhesNossosProdutos/NossosProdutos_assumpreto_4_copia.png"

import imagemCafeFamiliaSitioConteiner from "../../../assets/DetalhesNossosProdutos/NossosProdutos_familiadositio_1.png";

import imagemCafeFamiliaSitioIcone from "../../../assets/DetalhesNossosProdutos/NossosProdutos_familiadositio_2.png";
import imagemCafeFamiliaSitioCafeAVacuo from "../../../assets/DetalhesNossosProdutos/NossosProdutos_familiadositio_cafevacuo.png";
import imagemCafeFamiliaSitioCapuccino from "../../../assets/DetalhesNossosProdutos/NossosProdutos_familiadositio_capuccino.png";
import imagemCafeFamiliaSitioGourmet from "../../../assets/DetalhesNossosProdutos/NossosProdutos_familiadositio_gourmet.png";

import imagemCafeSpecialeConteiner from "../../../assets/DetalhesNossosProdutos/NossosProdutos_speciale_1.png";
import imagemCafeSpecialeRegulare from "../../../assets/DetalhesNossosProdutos/NossosProdutos_speciale_2.png";
import imagemCafeSpecialeFrutado from "../../../assets/DetalhesNossosProdutos/NossosProdutos_speciale_3.png";
import imagemCafeSpecialeImperiale from "../../../assets/DetalhesNossosProdutos/NossosProdutos_speciale_4.png";

export default function NossosProdutosInfo() {
    const {id}  = useParams();

    let conteudoPagina = undefined;
    if(id === '1') {
        conteudoPagina = {
            nome:'FAMÍLIA DO SÍTIO',
            textoCabecalho: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
            imgCabecalho: imagemCafeFamiliaSitioConteiner,
            textoImgCabecalho: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna',
            produtos: [
                {
                    img: imagemCafeFamiliaSitioIcone,
                    titulo: 'Café Almofada',
                    descricao: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ',
                    disponibilidade: 'Disponível nas versões 250g e 500g',
                    apresentacao: 'Café torrado e moído',
                    metodoIndicado: 'Ideal para filtros de papel ou polipropileno e coador de pano.',
                    tipoDeCafe: '100% Arábica',
                    aroma: 'Intenso',
                    sabor: 'Intenso',
                    bebida: 'Dura',
                    corpo: 'Encorpado',
                    moagem: 'Média',
                    torracao: 'Média',
                },
                {
                    img: imagemCafeFamiliaSitioCafeAVacuo,
                    titulo: 'Café a Vácuo',
                    descricao: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ',
                    disponibilidade: 'Disponível nas versões 250g e 500g',
                    apresentacao: 'Café torrado e moído',
                    metodoIndicado: 'Ideal para filtros de papel ou polipropileno e coador de pano.',
                    tipoDeCafe: '100% Arábica',
                    aroma: 'Intenso',
                    sabor: 'Intenso',
                    bebida: 'Dura',
                    corpo: 'Encorpado',
                    moagem: 'Média',
                    torracao: 'Média',
                },
                {
                    img: imagemCafeFamiliaSitioCapuccino,
                    titulo: 'Cappuccino',
                    descricao: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ',
                    disponibilidade: 'Disponível nos sabores Tradicional e Canela',
                    apresentacao: 'Mistura para preparo de cappuccino sabor Tradicional',
                    peso:'200g',
                    bebida: 'Dura',
                    corpo: 'Encorpado',
                    moagem: 'Fina',
                    torracao: 'Média',
                },
                {
                    img: imagemCafeFamiliaSitioGourmet,
                    titulo: 'Café em Grãos',
                    descricao: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ',
                    disponibilidade: 'Disponível na versão 500g',
                    apresentacao: 'Café torrado e moído',
                    metodoIndicado: 'Ideal para filtros de papel ou polipropileno e coador de pano.',
                    tipoDeCafe: '100% Arábica',
                    aroma: 'Intenso',
                    sabor: 'Intenso',
                    bebida: 'Dura',
                    corpo: 'Encorpado',
                    moagem: 'Média',
                    torracao: 'Média',
                },
            ]
        }
    } else if(id === '2') {
        conteudoPagina = {
            nome:' SPECIALE ESPRESSO',
            textoCabecalho: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
            imgCabecalho: imagemCafeSpecialeConteiner,
            textoImgCabecalho: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna',
            produtos: [
                {
                    img: imagemCafeSpecialeRegulare,
                    titulo: 'Café em Grãos Imperiale',
                    descricao: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ',
                    disponibilidade: 'Disponível na versão 500g',
                    apresentacao: 'Café torrado e moído',
                    metodoIndicado: 'Ideal para filtros de papel ou polipropileno e coador de pano.',
                    tipoDeCafe: '100% Arábica',
                    aroma: 'Intenso',
                    sabor: 'Intenso',
                    bebida: 'Dura',
                    corpo: 'Encorpado',
                    moagem: 'Média',
                    torracao: 'Média',
                },
                {
                    img: imagemCafeSpecialeFrutado,
                    titulo: 'Café em Grãos Fruttato',
                    descricao: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ',
                    disponibilidade: 'Disponível na versão 500g',
                    apresentacao: 'Café torrado e moído',
                    metodoIndicado: 'Ideal para filtros de papel ou polipropileno e coador de pano.',
                    tipoDeCafe: '100% Arábica',
                    aroma: 'Intenso',
                    sabor: 'Intenso',
                    bebida: 'Dura',
                    corpo: 'Encorpado',
                    moagem: 'Média',
                    torracao: 'Média',
                },
                {
                    img: imagemCafeSpecialeImperiale,
                    titulo: 'Café em Grãos Regolare',
                    descricao: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ',
                    disponibilidade: 'Disponível na versão 500g',
                    apresentacao: 'Mistura para preparo de cappuccino sabor Tradicional',
                    peso:'200g',
                    bebida: 'Dura',
                    corpo: 'Encorpado',
                    moagem: 'Fina',
                    torracao: 'Média',
                },
            ]
        }
    } else if(id === '3') {
        conteudoPagina = {
            nome:'ASSUM PRETO',
            textoCabecalho: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
            imgCabecalho: imagemCafeAssumPretoConteiner,
            istextoImgCabecalhoBlack: true,
            textoImgCabecalho: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna',
            produtos: [
                {
                    img: imagemCafeAssumPretoIcone,
                    titulo: 'Café Almofada',
                    descricao: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ',
                    disponibilidade: 'Disponível nas versões 250g e 500g',
                    apresentacao: 'Café torrado e moído',
                    metodoIndicado: 'Ideal para filtros de papel ou polipropileno e coador de pano.',
                    tipoDeCafe: '100% Arábica',
                    aroma: 'Intenso',
                    sabor: 'Intenso',
                    bebida: 'Dura',
                    corpo: 'Encorpado',
                    moagem: 'Média',
                    torracao: 'Média',
                },
                {
                    img: imagemCafeAssumPretoVacuo,
                    titulo: 'Café a Vácuo',
                    descricao: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ',
                    disponibilidade: 'Disponível nas versões 250g e 500g',
                    apresentacao: 'Café torrado e moído',
                    metodoIndicado: 'Ideal para filtros de papel ou polipropileno e coador de pano.',
                    tipoDeCafe: '100% Arábica',
                    aroma: 'Intenso',
                    sabor: 'Intenso',
                    bebida: 'Dura',
                    corpo: 'Encorpado',
                    moagem: 'Média',
                    torracao: 'Média',
                },
                {
                    img: imagemCafeAssumCappucino,
                    titulo: 'Cappuccino',
                    descricao: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ',
                    disponibilidade: 'Disponível nos sabores Tradicional e Canela',
                    apresentacao: 'Mistura para preparo de cappuccino sabor Tradicional',
                    peso:'200g',
                    bebida: 'Dura',
                    corpo: 'Encorpado',
                    moagem: 'Fina',
                    torracao: 'Média',
                },
            ]
        }
    } else {
        conteudoPagina = {
        }
    }

    return (
        <>
            <Paginacao text={"FAMÍLIA DO SÍTIO > NOSSOS PRODUTOS > " + conteudoPagina.nome} />

            <DivContainer>
                <Title>Nossas marcas</Title>
                <Text>
                    {conteudoPagina.textoCabecalho}
                </Text>
            </DivContainer>

            <ImagemContainer id="imagem-1">
                <Container>
                    <TextoDescricao style={{color: conteudoPagina.istextoImgCabecalhoBlack ? 'black': 'white'}}>
                        {conteudoPagina.textoImgCabecalho}
                    </TextoDescricao>
                    <img
                        className="img-background"
                        src={conteudoPagina.imgCabecalho}
                        alt="Background image"
                    />
                </Container>
            </ImagemContainer>

            {conteudoPagina.produtos.map((produto, index) => {
                return <ProdutoSection style={{flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'}}>
                    <ImageContainer>
                        <img className="img" src={produto.img} alt="Cafe Assum Preto" />
                    </ImageContainer>

                    <ProdutoInfo>
                        <ProdutoTitle>{produto.titulo}</ProdutoTitle>
                        <ProdutoDescricao>
                            {produto.descricao}
                        </ProdutoDescricao>
                        <Disponibilidade>• <strong>{produto.disponibilidade}</strong></Disponibilidade>

                        <DetalhesProduto>
                            <div>
                                {!!produto.peso ? <p><strong>Peso Líquido:</strong> {produto.peso}</p> : <></>}
                                {!!produto.apresentacao ? <p><strong>Apresentação:</strong> {produto.apresentacao}</p> : <></>}
                                {!!produto.metodoIndicado ? <p><strong>Método indicado:</strong> {produto.metodoIndicado}</p> : <></>}
                                {!!produto.tipoDeCafe ? <p><strong>Tipo de café:</strong> {produto.tipoDeCafe}</p> : <></>}
                                {!!produto.aroma ? <p><strong>Aroma:</strong> {produto.aroma}</p> : <></>}
                                {!!produto.sabor ? <p><strong>Sabor:</strong> {produto.sabor}</p> : <></>}
                            </div>
                            <div>
                                {!!produto.bebida ? <p><strong>Bebida:</strong> {produto.bebida}</p> : <></>}
                                {!!produto.corpo ? <p><strong>Corpo:</strong> {produto.corpo}</p> : <></>}
                                {!!produto.moagem ? <p><strong>Moagem:</strong> {produto.moagem}</p> : <></>}
                                {!!produto.torracao ? <p><strong>Torração:</strong> {produto.torracao}</p> : <></>}
                            </div>
                        </DetalhesProduto>
                    </ProdutoInfo>
                </ProdutoSection>
            })}
        </>
    );
}
