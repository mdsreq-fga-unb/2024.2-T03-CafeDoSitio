import React, { useState } from "react";
import {
  TimelineCardContainer,
  Title,
  Text,
  Content,
  Content2,
  YearDisplay,
  TextBox,
  Button,
  Navigation,
  TimelineLine
} from "./styled";

export function TimelineCard() {
  const years = [1967, 1972, 1974, 1986, 1989];
  const texts = [
    "1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", 
    "3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", 
    "4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s", 
    "5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
];
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

      <Content2>
        <Title>Linha do Tempo</Title>
        <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry</Text>
      </Content2>
      
      <Content>
        <Button onClick={handlePrevious} disabled={currentYearIndex === 0}>
          {"<"}
        </Button>

        <YearDisplay>
          <span className="year">{years[currentYearIndex]}</span>
          <TextBox>
            <p>{texts[currentYearIndex]}</p>
            
            {/* Tentativa de colocar a imagem do celeirinho ao lado do testo
                Não deu muito certo
            <div style={{maxWidth: "75px", maxHeight: "50px"}}>
              <img src="https://images.squarespace-cdn.com/content/v1/5e135412c491ed60eb5caba2/1611587907737-SNWOZ7TR3415YDHVM9QN/Livestock+Feeds-01.jpg?format=500w" alt="testizinho" style={{ width: "100%", height: "100%", objectFit: "cover",}}/>
            </div> 
            */}
          </TextBox>
        </YearDisplay>

        <Button onClick={handleNext} disabled={currentYearIndex === years.length - 1}>
          {">"}
        </Button>
      </Content>

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
      </Navigation>

    </TimelineCardContainer>
  );
}
