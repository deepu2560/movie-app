import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [search, setsearch] = useState("spiderman");

  function handleinput({ value }) {
    setsearch(() => value);
  }

  // useEffect(() => {

  // }, [search]);

  const [data, setdata] = useState([
    {
      adult: false,
      backdrop_path: "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
      genre_ids: [28, 12, 878],
      id: 634649,
      original_language: "en",
      original_title: "Spider-Man: No Way Home",
      overview:
        "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      popularity: 1927.454,
      poster_path: "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      release_date: "2021-12-15",
      title: "Spider-Man: No Way Home",
      video: false,
      vote_average: 8.1,
      vote_count: 13846,
    },
  ]);

  return (
    <div className="App">
      <h1>Movie app</h1>
      <input
        type="text"
        placeholder="Search movie here..."
        onChange={(event) => handleinput(event.target)}
        id="search-input"
      />
      <div id="movie-display-div">
        {data.map((elem) => (
          <div></div>
        ))}
      </div>
    </div>
  );
}

export default App;
