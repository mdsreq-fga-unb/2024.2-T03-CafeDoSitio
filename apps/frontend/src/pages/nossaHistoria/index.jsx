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
    Container
} from "./styled";


export default function NossaHistoria(){
    const diferenciais = [
        {
            image: "https://www.oficinadanet.com.br/media/post/25197/330/images.jpg",
            title: "Ispsum Lorem - 1",
            text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            image: "https://www.oficinadanet.com.br/media/post/25197/330/images.jpg",
            title: "Ispsum Lorem - 2",
            text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            image: "https://www.oficinadanet.com.br/media/post/25197/330/images.jpg",
            title: "Ispsum Lorem - 3",
            text: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
    ]

    return (
      <>
        <Header pagina={NossaHistoria}/>
        <Paginacao text={"FAMÍLIA DO SÍTIO > NOSSA HISTÓRIA"}/>

        <FirstTextSection>
            <Title>Desde 1967, tanto tempo e ainda na moda</Title>
            <Text>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
                suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
            </Text>
        </FirstTextSection>

        <SecondTextSection>
            <img src={imagem} alt="Colagem de fotos"/>

            <div>
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

        <Title>Nosso Propósito</Title>

        <ThirdTextSection>
            <DiferencialSection>
                {diferenciais.map((diferencial) => (
                    <DiferencialCard>
                        <img src={diferencial.image} alt={diferencial.title} />
                        
                        <div>
                            <Title>{diferencial.title}</Title>
                            <Text>{diferencial.text}</Text>
                        </div>
                    </DiferencialCard>
                ))}
            </DiferencialSection>    
        </ThirdTextSection>

        <Container>
            <Text>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum
                dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit
                praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.
                Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit
            </Text>
        </Container>

        <Footer />
      </>
    );
}