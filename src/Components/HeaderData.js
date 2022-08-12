import React from "react";
import "./HeaderData.css"

const HeaderData = () => {
    return(
        <div className="header-data">
            <ul className="header-list">
                <li>
                    <div className="sq_logo">

                    </div>
                </li>
                <li>
                    <h1>Dazzie</h1>
                </li>
            </ul>
            <ul className="header-list">
                <li>
                    <img 
                        src="Notification Bell.svg"
                    />
                </li>
                <li>
                    <div className="prof">

                    </div>
                </li>
                <li>
                    <li>
                        Sumanta
                        <h5>cashier</h5>
                    </li>
                </li>
            </ul>
        </div>
    )
}

export default HeaderData