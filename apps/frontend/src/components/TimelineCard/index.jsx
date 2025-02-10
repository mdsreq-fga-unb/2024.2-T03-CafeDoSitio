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
    "Antônia e Teones Barbosa de Souza, que compraram a fábrica em 1967, foram pioneiros e se instalaram no Núcleo Bandeirante nos primeiros anos da capital federal. Desde o começo, Teones fez questão de utilizar o grão de maior qualidade na fábrica. Não sucumbia aos argumentos de que outra matéria-prima poderia baratear os custos de produção. A visão e o perfil enérgico deste pernambucano levaram à consolidação e à expansão da marca. Os valores passados por ele seguem direcionando a atuação da empresa.",
    "O Café do Sítio muda para o Setor Industrial de Taguatinga, na QI.21. No local, a empresa cresce e amplia o número de funcionários.",
    "O Café do Sítio patrocina a transmissão da Copa do Mundo na Alemanha pela Rádio Nacional. O \"melhor café do Brasil\" começa a ganhar o consumidor do Distrito Federal.",
    "Abre a filial em Goiânia, um primeiro passo para levar o Café do Sítio a todo Centro-Oeste.",
    "O Café do Sítio obtém o Selo de Pureza, criado no mesmo ano. Este selo certifica que o produto é puro, sem adulteração ou misturas, oferecendo segurança alimentar, qualidade e respeito ao consumidor.",
    "Começa a produção do café a vácuo, em embalagens de 250g e 500g. O Café do Sítio é Top of Mind desde a 1ª edição.",
    "Mudança para atual sede, no final do Pistão Sul. O Café também renova o seu maquinário, substituindo os torradores semi-automáticos por novos, que permitem o controle das curvas de temperatura e pressão.",
    "O Café do Sítio obtém o Selo de Qualidade Superior, que certifica a qualidade do produto final por meio de uma metodologia de análise sensorial. Além de certificar o produto, a empresa é auditada quanto às boas práticas de fabricação de todo o processo de industrialização, para garantir consistência.",
    "O Café do Sítio lança a sua linha de cafés especiais, nosso Speciale Espresso, com três blends: Imperiale, Regolare e Fruttato. Nesse mesmo ano, lançamos o Cappuccino do Sítio com nova fórmula, com cacau belga, em dois sabores: Tradicional e Canela.",
    "O Café do Sítio apresenta a sua família, são vários novos produtos, incluindo farinhas, feijões, flocão, canjica, pipoca, entre outros. Ganhamos o prêmio Latin American Quality Awards (Silver Seal), que qualifica a instituição mais ampla no que se refere ao desenvolvimento de normas e padrões de qualidade na América Latina.",
    "Abre a filia em Palmas, um novo centro de distribuição que foca na venda do nosso café a vácuo",
    "A nossa história continua a ser escrita"
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
