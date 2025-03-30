import React from "react";
import "../App.css"


const CardButton = ({name}) => {
    return (
        <div className="button_container">
            <button type="button" className="button">{name}</button>
        </div>
    );
}

export default CardButton;