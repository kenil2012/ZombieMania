import React from "react";
import {Card} from "../card/card.component";
import "../card-list/card-list.style.css";

export const CardList = props => {
    return(
        <div className="card-list">
            {
            props.zombies.map(zombie => 
              <Card key={zombie.id} zombie={zombie}/>
            )
            }
        </div>
    )
}