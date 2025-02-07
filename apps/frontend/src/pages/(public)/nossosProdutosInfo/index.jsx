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

import imagemCafeFamiliaSitioConteiner from "../../../assets/DetalhesNossosProdutos/NossosProdutos_familiadositio_1.png";

import imagemCafeFamiliaSitioIcone from "../../../assets/DetalhesNossosProdutos/NossosProdutos_familiadositio_2.png";
import imagemCafeFamiliaSitioCafeAVacuo from "../../../assets/DetalhesNossosProdutos/NossosProdutos_familiadositio_cafevacuo.png";
import imagemCafeFamiliaSitioCapuccino from "../../../assets/DetalhesNossosProdutos/NossosProdutos_familiadositio_capuccino.png";
import imagemCafeFamiliaSitioGourmet from "../../../assets/DetalhesNossosProdutos/NossosProdutos_familiadositio_gourmet.png";

import imagemCafeSpecialeConteiner from "../../../assets/DetalhesNossosProdutos/NossosProdutos_speciale_1.png";
import imagemCafeSpecialeIcone from "../../../assets/DetalhesNossosProdutos/NossosProdutos_speciale_5.png";

import imagemAssumPretoVacuo from "../../../assets/DetalhesNossosProdutos/NossosProdutos_assumpreto_3_copia.png"
import imagemCappucino from "../../../assets/DetalhesNossosProdutos/NossosProdutos_assumpreto_4_copia.png"

//import imagemTexturaDeFundo from "../../../assets/DetalhesNossosProdutos/3.png"
import logoAssumPreto from "../../../assets/DetalhesNossosProdutos/4.png"

export default function NossosProdutosInfo() {
    const {id}  = useParams();

    let conteudoPagina = undefined;
    if(id == '1') {
        conteudoPagina = {
            nome:'FAMÍLIA DO SÍTIO',
            textoCabecalho: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
            imgCabecalho: imagemCafeFamiliaSitioConteiner,
            textoImgCabecalho: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
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
    } else {
        conteudoPagina = {
        }
    }

    console.log(conteudoPagina);
    return (
        <>
            <Paginacao text={"FAMÍLIA DO SÍTIO > NOSSOS PRODUTOS > " + conteudoPagina.nome} />

            <DivContainer>
                <Title>Nossas marcas</Title>
                <Text>
                    {conteudoPagina.textoCabecalho}
                </Text>
            </DivContainer>

            {conteudoPagina.produtos.map((produto, index) => {
                <ProdutoSection >
                    <ImageContainer>
                        <img className="img" src={conteudoPagina.imgCabecalho} alt="Cafe Assum Preto" />
                    </ImageContainer>

                    <ProdutoInfo>
                        <ProdutoTitle>{produto.titulo}</ProdutoTitle>
                        <ProdutoDescricao>
                            {produto.descricao}
                        </ProdutoDescricao>
                        <Disponibilidade>• <strong>{produto.disponibilidade}</strong></Disponibilidade>

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
            })}
        </>
    );
}
