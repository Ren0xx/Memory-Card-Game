import React from "react";
import "../styles/Cards.css";

const cards = (props) => {
    return (
        <div className="cards">
            {props.cards.map((card) => {
                return (
                    <button
                        className='card'
                        key={card.id}
                        id={card.id}
                        onClick={props.check}>
                        <img alt='.' src={card.image} />
                        <h4>{card.name}</h4>
                    </button>
                );
            })}
        </div>
    );
};

export default cards;
