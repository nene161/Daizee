import React from "react";
import "./BodyCard.css"

const BodyCard = ({data, index}) => {
    return (
        <div>
            <div class="card">
                <div class="card_img">
        
                </div>
                <h3>{data.name}</h3>
                <h3>{data.price}</h3>
            </div>
        </div>
    )
}

export default BodyCard