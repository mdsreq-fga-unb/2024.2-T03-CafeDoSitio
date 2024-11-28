import React, { useState } from "react"; 
import "./timelineCard.css";

export function TimelineCard() {
    const years = [1967, 1972, 1974, 1986, 1989];
    const texts = ['texto 1', 'texto 2', 'texto 3' , 'texto 4', 'texto 5']
    const [currentYearIndex, setCurrentYearIndex] = useState(0); 

    const handleNext = () => {
        if (currentYearIndex < years.length - 1) {
            setCurrentYearIndex(currentYearIndex + 1);
        }
    };

    const handlePrevious = () => {
        if (currentYearIndex <= years.length - 1) {
            setCurrentYearIndex(currentYearIndex - 1);
        }
    };

    const handleNavigatoin = (selectedYear) => {
        setCurrentYearIndex(selectedYear);
    }

    if(currentYearIndex == 0){
        return (
            <div className="timeline-card">
                <h2 className="timeline-title">Linha do Tempo</h2>
                <div className="timeline-content">
                    <div className="year-display">
                        <span className="year">{years[currentYearIndex]}</span>
                    </div>
                    <div className="text-box">
                        <p>
                            {texts[currentYearIndex]}
                        </p>
                    </div>
                    <button className="next-button" onClick={handleNext}>
                        {'>'}
                    </button>
                </div>
                <div className="timeline-navigation">
                    <div className="timeline">
                        {years.map((year, index) => (
                            <div
                                key={year}
                                className={`timeline-item ${index === currentYearIndex ? "active" : ""}`}
                            >
                                {year}
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    else if(currentYearIndex == 4){
        return (
            <div className="timeline-card">
                <h2 className="timeline-title">Linha do Tempo</h2>
                <div className="timeline-content">
                    <button className="next-button" onClick={handlePrevious}>
                        {'<'}
                    </button>
                    <div className="year-display">
                        <span className="year">{years[currentYearIndex]}</span>
                    </div>
                    <div className="text-box">
                        <p>
                            {texts[currentYearIndex]}
                        </p>
                    </div>
                </div>
                <div className="timeline-navigation">
                    <div className="timeline">
                        {years.map((year, index) => (
                            <div
                                key={year}
                                className={`timeline-item ${index === currentYearIndex ? "active" : ""}`}
                            >
                                {year}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }

    else {
        return(
            <div className="timeline-card">
                <h2 className="timeline-title">Linha do Tempo</h2>
                <div className="timeline-content">
                    <button className="next-button" onClick={handlePrevious}>
                        {'<'}
                    </button>
                    <div className="year-display">
                        <span className="year">{years[currentYearIndex]}</span>
                    </div>
                    <div className="text-box">
                        <p>
                            {texts[currentYearIndex]}
                        </p>
                    </div>
                    <button className="next-button" onClick={handleNext}>
                        {'>'}
                    </button>
                </div>
                <div className="timeline-navigation">
                    <div className="timeline">
                        {years.map((year, index) => (
                            <div
                                key={year}
                                className={`timeline-item ${index === currentYearIndex ? "active" : ""}`}
                            >
                                {year}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }  
}
