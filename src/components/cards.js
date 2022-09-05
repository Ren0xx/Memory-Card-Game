import React from "react";
import Card from "./card";
import "../styles/Cards.css";

const cards = (props) => {
    return (
        <div className='cards'>
            <Card checkIfAlreadyClicked={props.check} />
            <Card checkIfAlreadyClicked={props.check} />
            <Card checkIfAlreadyClicked={props.check} />
            <Card checkIfAlreadyClicked={props.check} />
            <Card checkIfAlreadyClicked={props.check} />
            <Card checkIfAlreadyClicked={props.check} />
            <Card checkIfAlreadyClicked={props.check} />
            <Card checkIfAlreadyClicked={props.check} />
            <Card checkIfAlreadyClicked={props.check} />
            <Card checkIfAlreadyClicked={props.check} />
            <Card checkIfAlreadyClicked={props.check} />
            <Card checkIfAlreadyClicked={props.check} />
        </div>
    );
};

export default cards;
