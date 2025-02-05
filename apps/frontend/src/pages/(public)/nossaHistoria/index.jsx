import { TimelineCard } from "../../../components/TimelineCard";
import Paginacao from "../../../components/Paginacao";
import imagem from "../../../assets/colagem_de_fotos.png"
import {
    Title,
    Text,
    Space,
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
    DiferencialText
} from "./styled";

//Icones
import Missao from '../../../assets/Missão.svg'

export default function NossaHistoria() {
    const diferenciais = [
        {
            image: (
                <svg id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" style={{ width: "75px", height: "75px"}}>                     
                    <path class="cls-1" fill="#2B674B" d="M463.21,407.79l-169.99-222.88v-101.4c0-8.15-6.67-14.82-14.82-14.82-3.94,0-7.51,1.58-10.17,4.11h-98.92c-7.76,0-14.11,6.35-14.11,14.11v63.78c0,7.76,6.35,14.11,14.11,14.11h94.28v16.67l-82.79,108.55-18.73-26.7c-2.74-3.91-7.22-6.23-11.99-6.23s-9.25,2.33-11.99,6.23l-101.65,144.93c-3.14,4.47-3.52,10.32-1,15.16,2.52,4.85,7.53,7.89,12.99,7.89h403.14c5.57,0,10.65-3.16,13.12-8.15,2.47-4.99,1.9-10.95-1.48-15.37ZM189.13,140.15c-5.18,0-9.42-2.69-9.42-5.98v-30.74c0-3.29,4.24-5.98,9.42-5.98h74.46v42.71h-74.46Z" />
                </svg>
            ),
            title: "MISSÃO",
            text: "Oferecer alimentos com o cuidado e a qualidade do Sítio para a experiência e satisfação dos clientes."
        },
        {
            image: (
                <svg id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" style={{ width: "75px", height: "75px" }}>                     
                    <path class="cls-1" fill="#2B674B" d="M255.14,113.7C88.17,113.7,7.68,248.16,7.68,248.16c0,0,97.38,138.14,247.46,138.14s237.18-138.14,237.18-138.14c0,0-70.2-134.46-237.18-134.46ZM254.97,322.82c-39.63,0-71.76-32.13-71.76-71.76,0-5.3.62-10.45,1.71-15.43,4.89,2.98,10.57,4.8,16.71,4.8,17.8,0,32.22-14.43,32.22-32.22,0-8.64-3.44-16.44-8.98-22.23,9.16-4.25,19.33-6.68,30.1-6.68,39.63,0,71.76,32.13,71.76,71.76s-32.13,71.76-71.76,71.76Z" />
                </svg>
            ),
            title: "VISÃO",
            text: "Que a Família do Sítio seja uma referência em alimentos no Centro-Oeste"
        },
        {
            image: (
                <svg id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" style={{ width: "75px", height: "75px" }}>                     
                    <path class="cls-1" fill="#2B674B" d="M449.93,203.35c-2.17-6.66-7.93-11.52-14.86-12.53l-116.47-16.93-52.09-105.54c-3.1-6.28-9.5-10.26-16.51-10.26s-13.4,3.98-16.51,10.26l-52.09,105.54-116.47,16.93c-6.93,1.01-12.69,5.86-14.86,12.53-2.16,6.67-.36,13.98,4.66,18.87l84.28,82.15-19.89,116c-1.18,6.91,1.65,13.89,7.32,18.01,3.21,2.33,7.01,3.51,10.82,3.51,2.93,0,5.87-.7,8.57-2.12l104.17-54.77,104.18,54.77c6.2,3.27,13.72,2.71,19.39-1.4,5.67-4.12,8.5-11.1,7.32-18l-19.9-116,84.28-82.15c5.02-4.89,6.83-12.21,4.66-18.87Z" />
                </svg>
            ),
            title: "VALORES",
            text: "Honestidade • Transparência • Respeito • União • Qualidade Sabor Brasileiro"
        },
    ]

    return (
        <>
            <Paginacao text={"FAMÍLIA DO SÍTIO > NOSSA HISTÓRIA"} />
            <Space />

           
            <DivContainer>
                <Title>Desde 1967, tanto tempo e ainda na moda</Title>
                <Text>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                    dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                    suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                </Text>
            </DivContainer>
       

            <SecondTextSection>
                <Container>
                    <img src={imagem} alt="Colagem de fotos" className="img" />                    
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
            


            <div style={{ marginTop: "50px", textAlign: "center" }}>
                <Title>Nosso Propósito</Title>
            </div>

            <ThirdTextSection>
                <DiferencialSection>
                    {diferenciais.map((diferencial, index) => (
                        <DiferencialCard key={index}>
                            {/* Ícone do diferencial (SVG já renderizado) */}
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
                                {diferencial.image}
                            </div>

                            {/* Linha vermelha visível */}
                            <RedLine style={{ height: "12vh", margin: "0 1rem" }} />

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
                                <DiferencialText>{diferencial.text}</DiferencialText>
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