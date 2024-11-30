import { TimelineCard } from "../../components/owerHistorySection/TimelineCard";
import Header from "../../components/owerHistorySection/Header";
import Footer from "../../components/owerHistorySection/Footer";
import Paginacao from "../../components/owerHistorySection/Paginacao";
import imagem from "../../assets/colagem_de_fotos.png"
import { 
    Title,
    Text,
    TimelineSection,
    BackgroundLine,
    FirstTextSection,
    SecondTextSection,
    ThirdTextSection,
    DiferencialSection,
    DiferencialCard,
    DivContainer,
    Container,
    RedLine
} from "./styled";


export default function NossaHistoria(){
    const diferenciais = [
        {
            image: "https://coopharma.com.br/wp-content/uploads/2022/05/ICONES-Home_PHARMA-224-262x300.png",
            title: "MISSÃO",
            text: "Oferecer alimentos com o cuidado e a qualidade do Sítio para a experiência e satisfação dos clientes."
        },
        {
            image: "https://www.gp.usp.br/wp-content/uploads/2024/02/Fotos-de-Perfil-Nexos-13-300x300.png",
            title: "VISÃO",
            text: "Que a Família do Sítio seja uma referência em alimentos no Centro-Oeste"
        },
        {
            image: "https://cdn2.iconfinder.com/data/icons/greenline/512/star-512.png",
            title: "VALORES",
            text: "Honestidade • Transparência • Respeito • União • Qualidade Sabor Brasileiro"
        },
    ]

    return (
      <>
        <Header pagina={NossaHistoria}/>
        <Paginacao text={"FAMÍLIA DO SÍTIO > NOSSA HISTÓRIA"}/>

        <FirstTextSection>
            <DivContainer>
                <Title>Desde 1967, tanto tempo e ainda na moda</Title>
                <Text>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                    dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                    suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
                </Text>
            </DivContainer>
        </FirstTextSection>

        <SecondTextSection>
            <Container>
                <img src={imagem} alt="Colagem de fotos"/>
            </Container>

            
            <div style={{margin: "0", maxWidth: "700px"}}>
                <Title>Brasília e Café do Sítio, essa história tem sabor</Title>
                <Text>
                    Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim
                    veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex
                    ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse
                    molestie consequat, vel illum dolore eu
                    feugiat nulla facilisis at vero eros et accumsan
                    et iusto odio dignissim qui blandit praesent
                    luptatum zzril delenit augue duis dolore te
                    feugait nulla facilisi.Duis autem vel eum iriure
                    dolor in hendrerit in vulputate velit esse
                    molestie consequat.
                </Text>
            </div>

            
        </SecondTextSection>

        <TimelineSection>
            <BackgroundLine>
                <TimelineCard />
            </BackgroundLine>
        </TimelineSection>
        
        <div style={{ margin: "2rem" }}>
            <Title>Nosso Propósito</Title>
        </div>

        <ThirdTextSection>
            <DiferencialSection>
                {diferenciais.map((diferencial) => (                    
                    <DiferencialCard>
                        <div style={{maxWidth: "75px", maxHeight: "50px", marginLeft: "3rem"}}>
                            <img src={diferencial.image} alt={diferencial.title} style={{ width: "100%", height: "100%", objectFit: "cover",}}/>
                        </div>

                        
                        
                        <div style={{marginLeft: "1rem"}}>
                            <RedLine /> {/*Não sei porque isso não aparece*/}

                            <Title>{diferencial.title}</Title>


                            <div style={{maxWidth: "300px", maxHeight: "50px"}}> 
                                <Text>{diferencial.text}</Text>
                            </div>
                        </div>
                    </DiferencialCard>
                ))}
            </DiferencialSection>    
        </ThirdTextSection>

        <DivContainer>
            <Text>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
                dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
                praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit
            </Text>
        </DivContainer>

        <Footer />
      </>
    );
}