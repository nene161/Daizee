import React from "react";
import { useState } from "react";
import BodyCard from "./BodyCard";
import "./BodyInnerContainer.css"
import BodyTabs from "./BodyTabs";
import SearchBar from "./SearchBar";
import "../App.css"



const food = [
            {   name : "Sashimi",
                price: "$22"
            },
            {
                name: "Unagi - Grilled Eel",
                price: "$22"
            },
            {
                name: "Unagi - Grilled Eel",
                price: "$22"
            },
            {
                name: "Unagi - Grilled Eel",
                price: "$22"
            },
            {
                name: "Unagi - Grilled Eel",
                price: "$22"
            },
            {
                name: "Unagi - Grilled Eel",
                price: "$22"
            }
        ]

const BodyInnerContainer = () => {
    const [datas, setData] = useState(food)

    return (
        <div className="body-inner-container">
            <SearchBar hasHiddenButton/>
            <BodyTabs />
            <h2>Food</h2>
            <div className="body-card">
                {datas.map((data, index) => (
                    <BodyCard data={data}/>
                ))}
            
            </div>
            <h2>Drinks</h2>
            <div className="body-card">
                {datas.map((data, index) => (
                    <BodyCard data={data}/>
                ))}
            </div>
        </div>
    )
}

export default BodyInnerContainer