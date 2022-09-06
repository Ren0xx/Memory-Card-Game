import React from "react";
import Card from "./card";
import "../styles/Cards.css";

const cards = (props) => {
    return (
        <div className='cards'>
            <Card checkIfAlreadyClicked={props.check} id={0}/>
            <Card checkIfAlreadyClicked={props.check} id={1}/>
            <Card checkIfAlreadyClicked={props.check} id={2}/>
            <Card checkIfAlreadyClicked={props.check} id={3}/>
            <Card checkIfAlreadyClicked={props.check} id={4}/>
            <Card checkIfAlreadyClicked={props.check} id={5}/>
            <Card checkIfAlreadyClicked={props.check} id={6}/>
            <Card checkIfAlreadyClicked={props.check} id={7}/>
            <Card checkIfAlreadyClicked={props.check} id={8}/>
            <Card checkIfAlreadyClicked={props.check} id={9}/>
            <Card checkIfAlreadyClicked={props.check} id={10}/>
        </div>
    );
};

export default cards;
