import React from "react";
import "./SearchBar.css"


const SearchBar = ({hasHiddenButton}) => {
    return (
        hasHiddenButton ? (<div className="search-bar">
        <form className="search-form" action="">
            <img
                src="SEARCH.svg"
            />
            <input 
                type="text"
                placeholder="Search Here.."
            />
        </form>
    </div>) : ( <div className="search-bar">
    <form className="search-form" action="">
        <img 
            src="SEARCH.svg"
        />
        <input 
            type="text"
            placeholder="Search Here.."
        />
    </form>
    <img 
            className="icon"
            src="filter.svg"
        />
        <img 
            className="icon"
            src="threedots.svg"
        />
</div>)
       
    )
}

export default SearchBar