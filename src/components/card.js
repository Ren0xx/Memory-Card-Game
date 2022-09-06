import React from "react";
import "../styles/Cards.css";
import cardPhoto from "../media/photos/card.jpg";
import uuid from 'react-uuid';
const Card = (props) => {
    return (
        <button
            className='card'
            onClick={props.checkIfAlreadyClicked}
            id={props.id}
            >
            <img src={cardPhoto} alt='..' />
            <h4>Character Name</h4>
        </button>
    );
};

export default Card;
