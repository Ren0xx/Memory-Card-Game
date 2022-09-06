import React, { useState, useEffect } from "react";
import Cards from "./components/cards";
import Header from "./components/header";
import "./styles/App.css";

const App = () => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [cardsClicked, setCardsClicked] = useState([]);
    const incrementScore = () => {
        setScore(score + 1);
    };
    const changeBestScore = () => {
        setBestScore(score);
    };
    
    const addToCardsArray = (newvalue) => {
        setCardsClicked((cardsClicked) => [...cardsClicked, newvalue]);
    };

    const resetArray = () => {
        setCardsClicked([]);
    };

    const checkIfAlreadyClicked = (event) => {
        const id = event.target.id;
        if (cardsClicked.includes(id)) {
            resetArray();
            setScore(0);
        } else {
            incrementScore();
        }
        addToCardsArray(id);
        console.log(cardsClicked);
    };

    if (score > bestScore) {
        changeBestScore();
    }
    return (
        <div className='container'>
            <Header title='Memory Card' score={score} bestScore={bestScore} />
            <Cards check={checkIfAlreadyClicked} />
        </div>
    );
};

export default App;
