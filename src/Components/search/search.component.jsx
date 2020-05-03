import React from "react";
import "../search/search.style.css";

export const Search = (props) => {
    return(
        <div>
            <input placeholder={props.placeholder}  className="search" type="search" onChange={props.changEvent}/>
        </div>
    )
}