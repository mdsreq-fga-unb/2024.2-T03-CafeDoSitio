import React, { useState } from "react";
import {
  TimelineCardContainer,
  Title,
  Text,
  Content,
  StyledDiv,
  YearDisplay,
  TextBox,
  Button,
  Navigation,
  GrayBar,
  TimelineLine,
  ImageWrapper,
  TextWrapper
} from "./styled";

// IMPORTAÇÃO DE IMAGENS:
import svg1 from "../../assets/1967.svg";
import svg2 from "../../assets/1972.svg";
import svg3 from "../../assets/1974.svg";
import svg4 from "../../assets/1986.svg";
import svg5 from "../../assets/1989.svg";
import svg6 from "../../assets/2000.svg";
import svg7 from "../../assets/2005.svg";
import svg8 from "../../assets/2009.svg";
import svg9 from "../../assets/2015.svg";
import svg10 from "../../assets/2017.svg";
import svg11 from "../../assets/2018.svg";
import svg12 from "../../assets/2025.svg";

export function TimelineCard() {
  const years = [1967, 1972, 1974, 1986, 1989, 2000, 2005, 2009, 2015, 2017, 2018, 2025];
  const texts = [
    "Vindos do Pernambuco, os recém-casados Antônia e Teones Barbosa de Souza chegam em Brasília. Se estabelecem no Núcleo Bandeirante, onde abrem um armazém de secos e molhados.",
    "O casal compra o Café do Sítio — a marca, o maquinário de torrefação e três veículos de distribuição. A fábrica funciona no Núcleo Bandeirante, e Teones mantém os negócios no armazém.",
    "O Café do Sítio muda para o Setor Industrial de Taguatinga, na QI 21. No local, a empresa cresce e amplia o número de funcionários.",
    "O Café do Sítio patrocina a transmissão da Copa do Mundo na Alemanha pela Rádio Nacional. O 'melhor café do Brasil' começa a ganhar o consumidor do Distrito Federal. ",
    "O Café segue conquistando os brasilienses. Em uma das ações de divulgação, promotores vão de porta em porta oferecer o produto, voltando dias depois para uma pesquisa de satisfação.",
    "Abre a filial em Goiânia, um primeiro passo para levar o Café do Sítio a todo Centro-Oeste. Hoje, 35 funcionários trabalham no local, que funciona como um centro de distribuição.",
    "Começa a produção do café a vácuo, em embalagens de 250g e 500g. Também tem início a venda do cappuccino, terceirizado para outra empresa, e distribuído com a marca Café do Sítio.",
    "Mudança para atual sede, no final do Pistão Sul. O Café também renova o seu maquinário, substituindo os torradores semi-automáticos por novos, que permitem o controle das curvas de temperatura e pressão.",
    "Em 10 de outubro, morre Teones Barbosa de Souza, em decorrência das complicações de uma cirurgia após um acidente de trânsito. A presidência do Café é assumida por sua mulher.",
    "O Café do Sítio se consolida como líder de mercado. No Distrito Federal, tem 60% da preferência dos consumidores, segundo pesquisa da Associação Brasileira de Supermercados (Abras).",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
  ];

  const icones = [
    <img src={svg1} alt="celeiro" />,
    <img src={svg2} alt="casas" />,
    <img src={svg3} alt="cafe" />,
    <img src={svg4} alt="cafe" />,
    <img src={svg5} alt="cafe" />,
    <img src={svg6} alt="cafe" />,
    <img src={svg7} alt="cafe" />,
    <img src={svg8} alt="cafe" />,
    <img src={svg9} alt="cafe" />,
    <img src={svg10} alt="cafe" />,
    <img src={svg11} alt="cafe" />,
    <img src={svg12} alt="cafe" />,
  ]

  const [currentYearIndex, setCurrentYearIndex] = useState(0);

  const handleNext = () => {
    if (currentYearIndex < years.length - 1) {
      setCurrentYearIndex(currentYearIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentYearIndex > 0) {
      setCurrentYearIndex(currentYearIndex - 1);
    }
  };

  return (
    <TimelineCardContainer>
     
      <StyledDiv className="title">
        <Title>Linha do Tempo</Title>
        <Text>Depois de 6 décadas, podemos afirmar que nossa história se confunde com a criação de Brasília, tornando nossa trajetória ainda mais especial</Text>
      </StyledDiv>
     
      <Content>
        <div >
          <Button onClick={handlePrevious} disabled={currentYearIndex === 0}>
            {"<"}
          </Button>
        </div>

        <YearDisplay>
          <span className="year">{years[currentYearIndex]}</span>
          

          <TextWrapper>
            <TextBox><p>{texts[currentYearIndex]}</p></TextBox>
                        
            <ImageWrapper >
              <div
                style={{
                  width: "150px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
              }}

              >
                {icones[currentYearIndex]}            
              </div>
            </ImageWrapper>
          </TextWrapper>

        </YearDisplay>

        <Button onClick={handleNext} disabled={currentYearIndex === years.length - 1}>
          {">"}
        </Button>
      </Content>


      <GrayBar>
        <Navigation>
          <div className="timeline">
            {years.map((year, index) => (
              <div
              className={`timeline-item ${index === currentYearIndex ? "active" : ""}`}
              onClick={() => setCurrentYearIndex(index)}
              >
                <div className="timeline-item-year">{year}</div>
              </div>

            ))}
          
          </div>
          <TimelineLine />
        </Navigation>
      </GrayBar>


    </TimelineCardContainer>
  );
}
