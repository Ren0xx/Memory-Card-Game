import React from "react";
import "../styles/Header.css";

const header = (props) => {
    return (
        <div className='header'>
            <div>
                <h1>{props.title}</h1>
                <p>Get points by clicking on an image but don't click on any more than once!</p>
            </div>
            <div>
                <p>Score: {props.score}</p>
                <p>Best Score: {props.bestScore}</p>
            </div>
        </div>
    );
};

export default header;
