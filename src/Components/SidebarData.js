import React from "react";
import "./SidebarData.css"
import { useNavigate } from "react-router-dom";
import "../App.css"
import { useState } from "react";

const SidebarData = () => {
    const[isActive, setIsActive]= useState(false)
    const[isTwoActive, setIsTwoActive] = useState(false)

    let navigate = useNavigate();

  


    return (
        <div className="data">
            <ul className="side-list">
                <li>
                    <img
                        style={{backgroundColor: isActive ? '#5541D7' : ''}} 
                        onClick={() => {
                            setIsActive(true)
                            setIsTwoActive(false)
                            navigate("/")
                        }}
                        src="orders.svg"
                    />
                </li>
                <li>
                    <img
                     style={{backgroundColor: isTwoActive ? '#5541D7' : ''}} 
                        onClick={()=> {
                            setIsTwoActive(true)
                            setIsActive(false)
                            navigate("/customers")
                        }} 
                        src="customer.svg"
                    />
                </li>
                <li>
                    <img 
                        src="Package.svg"
                    />
                </li>
                <li>
                    <img 
                        src="Coupon Discount.svg"
                    />
                </li>
                <li>
                    <img 
                        src="user.svg"
                    />
                </li>
            </ul>
            <ul className="side-list">
                <li>
                    <img 
                        src="settings.svg"
                    />
                </li>
            </ul>
        </div>
    )
}

export default SidebarData