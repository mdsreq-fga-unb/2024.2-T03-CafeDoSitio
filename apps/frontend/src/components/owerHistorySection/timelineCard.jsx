import React, { useState } from "react";
import {
  TimelineCardContainer,
  Title,
  Content,
  YearDisplay,
  TextBox,
  Button,
  Navigation,
} from "./TimelineCard-styles";

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
      <Title>Linha do Tempo</Title>
      <Content>
        <Button onClick={handlePrevious} disabled={currentYearIndex === 0}>
          {"<"}
        </Button>
        <YearDisplay>
          <span className="year">{years[currentYearIndex]}</span>
        </YearDisplay>
        <TextBox>
          <p>{texts[currentYearIndex]}</p>
        </TextBox>
        <Button onClick={handleNext} disabled={currentYearIndex === years.length - 1}>
          {">"}
        </Button>
      </Content>
      <Navigation>
        <div className="timeline">
          {years.map((year, index) => (
            <div
              key={year}
              className={`timeline-item ${index === currentYearIndex ? "active" : ""}`}
              onClick={() => setCurrentYearIndex(index)}
            >
              {year}
            </div>
          ))}
        </div>
      </Navigation>
    </TimelineCardContainer>
  );
}
