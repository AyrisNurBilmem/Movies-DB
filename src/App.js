import React, {useState} from "react";
import Search from "./components/Search";
import axios from "axios";   //to search movies
import Results from "./components/Results";
import Popup from "./components/Popup";

function App() {

  const [searchText, setSearchText] = useState({
    searchQuery: "",
    results: [],
    selected :{}
  });

  const apiKey = "http://www.omdbapi.com/?apikey=f8951d4c"; //api key from omdb  //removed tt... part(fixed)
  
function handleInput(event){  //for the input text
  let s= event.target.value;

  setSearchText(prevValue => {
    return {...prevValue, s}
  });

}

function searchMovie(event){
  
  if (event.key === "Enter"){
    
    axios(apiKey +"&s=" + searchText.s).then(({data}) =>{
      let results = data.Search;

      setSearchText(prevState =>{
        return { ...prevState, results: results}
      })
    });

  }
  }

  function openPopUp(id){
    axios(apiKey + "&i=" + id).then(({data}) =>{
      let result = data;

      setSearchText(prevState =>{
        return {...prevState, selected:result}
      })
    })
  }

function closePopUp(){
  setSearchText(prevState =>{
    return {...prevState, selected: {}}
  })
}

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
      <Search  handleInput = {handleInput} searchMovie = {searchMovie}/>
      <Results results = {searchText.results} openPopUp = {openPopUp}/>

      {(typeof searchText.selected.Title != "undefined") ? <Popup selected={searchText.selected} closePopUp ={closePopUp} /> : false}
      </main>
    </div>
  );
}

 


export default App;
