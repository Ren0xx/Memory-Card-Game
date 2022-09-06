import React, { useState } from "react";
import Cards from "./components/cards";
import Header from "./components/header";
import IMAGES from "./index";
import "./styles/App.css";

const App = () => {
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [cardsClicked, setCardsClicked] = useState([]);
    const [cards, setCards] = useState([
        {
            id: 0,
            name: "Anub'arak",
            image: IMAGES.anub,
        },
        {
            id: 1,
            name: "Deathwing",
            image: IMAGES.deathwing,
        },
        {
            id: 2,
            name: "Grommash Hellscream",
            image: IMAGES.grommash,
        },
        {
            id: 3,
            name: "Illidan",
            image: IMAGES.illidan,
        },
        {
            id: 4,
            name: "Lord Jaraxxus",
            image: IMAGES.jaraxxus,
        },
        {
            id: 5,
            name: "Kel'thuzad",
            image: IMAGES.kel,
        },
        {
            id: 6,
            name: "Lich King",
            image: IMAGES.lichKing,
        },
        {
            id: 7,
            name: "Rexxar",
            image: IMAGES.rexxar,
        },
        {
            id: 8,
            name: "Sylvanas Windrunner",
            image: IMAGES.sylvanas,
        },
        {
            id: 9,
            name: "Thrall",
            image: IMAGES.thrall,
        },
        {
            id: 10,
            name: "Uther The Lightbringer",
            image: IMAGES.uther,
        },
        {
            id: 11,
            name: "Ysera the Dreamer",
            image: IMAGES.ysera,
        },
    ]);

    const shuffleCards = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        setCards(array);
    };
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
            setScore(0);
            resetArray();
        } else {
            incrementScore();
            addToCardsArray(id);
        }
        shuffleCards(cards);
    };

    if (score > bestScore) {
        changeBestScore();
    }
    return (
        <div className='container'>
            <Header title='Memory Card' score={score} bestScore={bestScore} />
            <Cards check={checkIfAlreadyClicked} cards={cards} />
        </div>
    );
};

export default App;
