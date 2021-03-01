import React from "react";

function Search(props){
    return (
        <section className = "searchbox-wrap">
            <input 
            type = "text" 
            placeholder ="Search any movie..." 
            className="searchBox"
            onChange = {props.handleInput}
            onKeyPress = {props.searchMovie}
            ></input>
        </section>
    )

}

export default Search;