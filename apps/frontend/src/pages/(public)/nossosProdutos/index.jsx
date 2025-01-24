import { TimelineCard } from "../../../components/TimelineCard";
import Paginacao from "../../../components/Paginacao";
import imagem from "../../../assets/colagem_de_fotos.png"
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
    RedLine,

} from "./styled";


export default function NossosProdutos() {
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
            <Paginacao text={"FAMÍLIA DO SÍTIO > NOSSOS PRODUTOS"} />

           
            <DivContainer>
                <Title>Nossas marcas</Title>
                <Text>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                    dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                    suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </Text>
            </DivContainer>
       

            <SecondTextSection>
                <Container>
                    <div style={{ 
                        backgroundImage: "linear-gradient(to right, #ff7e5f, #feb47b)",
                        width: "100%",
                        height: "500px",  }}>      
                    </div>
                </Container>


                <div style={{ margin: "0", maxWidth: "700px" }}>
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

            
            <BackgroundLine>
                <TimelineCard></TimelineCard>
            </BackgroundLine>
            


            <div style={{ margin: "3rem 6rem", textAlign: "center" }}>
                <Title>Nosso Propósito</Title>
            </div>

            <ThirdTextSection>
                <DiferencialSection>
                    {diferenciais.map((diferencial, index) => (
                        <DiferencialCard key={index}>
                            {/* Imagem do diferencial */}
                            <div
                                style={{
                                    maxWidth: "75px",
                                    maxHeight: "75px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    margin: "0 1rem",
                                }}
                            >
                                <img
                                    src={diferencial.image}
                                    alt={diferencial.title}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "contain",
                                    }}
                                />
                            </div>

                            {/* Linha vermelha visível */}
                            <RedLine style={{ height: "80px", margin: "0 1rem" }} />

                            {/* Texto do diferencial */}
                            <div style={{ flex: 1, textAlign: "center" }}>
                                <Title
                                    style={{
                                        fontSize: "1.2rem",
                                        marginBottom: "0.5rem",
                                    }}
                                >
                                    {diferencial.title}
                                </Title>
                                <Text>{diferencial.text}</Text>
                            </div>
                        </DiferencialCard>
                    ))}
                </DiferencialSection>
            </ThirdTextSection>

            <DivContainer style={{ margin: "4rem auto", textAlign: "justify" }}>
                <Text>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
                    dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </Text>
            </DivContainer>
        </>
    );
}