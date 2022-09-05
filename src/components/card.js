import React  from "react";
import "../styles/Cards.css";
import cardPhoto from "../media/photos/card.jpg";

const Card = (props) => {
    return (
        <button className='card' onClick={props.checkIfAlreadyClicked}>
            <img src={cardPhoto} alt='..' />
            <h4>Character Name</h4>
        </button>
    );
};

export default Card;
