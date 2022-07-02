import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { SearchPage } from "./Components/Pages/Search";

function App() {
  const [search, setsearch] = useState("");
  const [page, setpage] = useState(1);
  const [totalPage, settotalPage] = useState(2);

  function handleinput({ value }) {
    setsearch(() => value);
  }

  useEffect(() => {
    if (search.length > 2) {
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=66783459cacfad7e27abfa85c92c7992&query=${search}&page=${page}`,
        )
        .then((res) => {
          const { results, total_pages } = res.data;
          setdata((prev) => results);
          settotalPage(() => total_pages);
        });
    }
  }, [search, page]);

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
      {search ? (
        <div>
          <div id="movie-display-page-changer">
            <div id="page-changer-button">
              <button
                onClick={() => {
                  if (page > 1) {
                    setpage((prev) => prev - 1);
                  }
                }}
              >
                Previous
              </button>
              <button
                onClick={() => {
                  if (page < totalPage) {
                    setpage((prev) => prev + 1);
                  }
                }}
              >
                Next
              </button>
            </div>
          </div>
          <SearchPage posters={data} />
        </div>
      ) : null}
    </div>
  );
}

export default App;
