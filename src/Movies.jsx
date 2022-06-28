import React from "react";
import { NavLink } from "react-router-dom";
import { useCustomHook } from "./Context";

const imgUrl = "https://via.placeholder.com/200/200";

const Movies = () => {
  const { Movies, isLoading } = useCustomHook();

  if (isLoading) {
    return (
      <div>
        <div className="loading">Loading....</div>
      </div>
    );
  }

  return (
    <>
      <section className="movie-page">
        <div className="container grid grid-4-col">
          {Movies.map((curValue) => {
            const { imdbID, Title, Poster } = curValue;
            const movieName = Title.substring(0, 15);
            return (
              <NavLink to={`movie/:${imdbID}`} key={imdbID}>
                <div className="card">
                  <div className="card-info">
                    <h2>{movieName}</h2>
                    <img src={Poster === "N/A" ? imgUrl : Poster} alt="#" />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
