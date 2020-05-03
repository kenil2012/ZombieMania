import React from "react";
import "../card/card.style.css";

export const Card = (props) => {
    return(
        <div className="card-container">
            <img src={`https://robohash.org/${props.zombie.id}?set=set2&size=180x180`} alt="Zombie"></img>
            <h1>{props.zombie.name}</h1>
    <h4>{props.zombie.email}</h4>
        </div>
    )
}