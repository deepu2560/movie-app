import React, { useState, useEffect } from "react";

import axios from "axios";

export const SearchPage = (posters) => {
  const data = posters.posters;

  const [movie, setmovie] = useState(false);

  useEffect(() => {
    setmovie(() => false);
  }, [data]);

  function searchMovie(key) {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${key}?api_key=66783459cacfad7e27abfa85c92c7992`,
      )
      .then((res) => {
        console.log(res.data);
        setmovie(() => true);
      });
  }
  return (
    <div id="movie-display-div">
      {!movie ? (
        data.map((elem) =>
          elem.backdrop_path != null ? (
            <div
              id="searched-movie-display-div"
              onClick={() => searchMovie(elem.id)}
              key={elem.id}
            >
              <img
                className="searched-movies-display-poster"
                src={`https://image.tmdb.org/t/p/w500${elem.poster_path}`}
              />
            </div>
          ) : null,
        )
      ) : (
        <h1>Hello World</h1>
      )}
    </div>
  );
};
