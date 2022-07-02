import React, { useState, useEffect } from "react";

import axios from "axios";

export const SearchPage = (posters) => {
  const data = posters.posters;

  const [movie, setmovie] = useState(false);

  const [movieData, setmovieData] = useState({});

  useEffect(() => {
    setmovie(() => false);
  }, [data]);

  function searchMovie(key) {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${key}?api_key=66783459cacfad7e27abfa85c92c7992`,
      )
      .then((res) => {
        setmovie(() => true);
        setmovieData(() => res.data);
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
        <div id="searched-movie-details-main-div">
          <img
            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
            alt=""
          />
          <div>
            <h1>{movieData.title}</h1>
            <p>
              <strong>Overview :- </strong> {movieData.overview}
            </p>
            <p>
              <strong>Genres :- </strong>
              {movieData.genres.map(({ name }) => name + " | ")}
            </p>
            <p>
              <strong>Budget :- </strong>
              {"$ " + Math.ceil(+movieData.budget / 1000000) + "M (approx.)"}
            </p>
            <p>
              <strong>Release Date :- </strong>
              {movieData.release_date}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
