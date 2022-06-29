import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [search, setsearch] = useState("spiderman");

  function handleinput({ value }) {
    setsearch(() => value);
  }

  function handlesearch(key) {
    if (key === "Enter") {
      searchMovie();
    }
  }

  function searchMovie() {
    axios
      .get(`http://www.omdbapi.com/?t=${search}&apikey=21c58bc6`)
      .then((res) => {
        console.log(res.data);
      });
  }

  return (
    <div className="App">
      <h1>Movie app</h1>
      <input
        type="text"
        placeholder="Press enter to search movie..."
        onChange={(event) => handleinput(event.target)}
        onKeyPress={(event) => handlesearch(event.key)}
        id="search-input"
      />
      <div id="movie-display-div">
        <img src="" alt="" />
        <div></div>
      </div>
    </div>
  );
}

export default App;
