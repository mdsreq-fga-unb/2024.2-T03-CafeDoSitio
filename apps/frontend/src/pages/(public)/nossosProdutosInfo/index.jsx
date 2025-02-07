import Paginacao from "../../../components/Paginacao";
import { Title, Text, DivContainer, ImagemContainer, Container, TextoDescricao } from "./styled";
import { useParams } from "react-router-dom";

import imagemCafeFamiliaSitioConteiner from "../../../assets/DetalhesNossosProdutos/NossosProdutos_familiadositio_1.png";

import imagemCafeFamiliaSitioIcone from "../../../assets/DetalhesNossosProdutos/NossosProdutos_familiadositio_2.png";
import imagemCafeFamiliaSitioCafeAVacuo from "../../../assets/DetalhesNossosProdutos/NossosProdutos_familiadositio_cafevacuo.png";
import imagemCafeFamiliaSitioCapuccino from "../../../assets/DetalhesNossosProdutos/NossosProdutos_familiadositio_capuccino.png";
import imagemCafeFamiliaSitioGourmet from "../../../assets/DetalhesNossosProdutos/NossosProdutos_familiadositio_gourmet.png";

export default function NossosProdutosInfo(props) {
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

            <ImagemContainer id="imagem-1">
                <Container>
                    <TextoDescricao style={{ color: props?.textColor || "white" }}>
                        {conteudoPagina.textoImgCabecalho}
                    </TextoDescricao>
                    <img 
                        className="img-background" 
                        src={props?.backgroundImage || conteudoPagina.imgCabecalho}
                        alt="Background image" 
                    />
                </Container>
            </ImagemContainer>
            {conteudoPagina.produtos.map((produto, index)=>{
                return <Container>
                    <div className={`produto-container ${index % 2 === 0 ? "img-esquerda" : "img-direita"}  `}>
                    <img src={produto.img} className="img-produto"  alt="imagem do produto"  />
                    <Container>
                        <Text>{produto.titulo}</Text>
                        <Text>{produto.descricao}</Text>
                        <Text>{produto.disponibilidade}</Text>
                    </Container>
                    </div>
                </Container>
            })}
        </>
    );
}
