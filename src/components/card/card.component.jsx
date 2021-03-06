import React from "react";
import './card.style.css';

export const Card = (props) => (
    <div className="card-container">
        <img 
            alt="monster" 
            src={`https://robohash.org/${props.id}?set=set2&size=180x180`}
        />
        <h2> {props.monster} </h2>
        <p> {props.email} </p>
    </div>
)