import React from "react";
import { useParams } from "react-router-dom";
import { useCustomHook } from "./Context";
import { NavLink } from "react-router-dom";

const SingleMovie = () => {
  const { id } = useParams();
  const { Movies, isLoading } = useCustomHook(`&i${id}`);

  if (isLoading) {
    return (
      <section className="movie-section">
        <div className="movie-card">
          <figure>
            <img src={Movies.Poster} alt="" />
          </figure>
          <div className="card-content">
            <p className="title">{Movies.Title}</p>
            <p className=""></p>
            <p className="card-text">{Movies.Released}</p>
            <p className="card-text">{Movies.Genre}</p>
            <p className="card-text">{Movies.imdbRating} / 10</p>
            <p className="card-text">{Movies.Country}</p>
            <NavLink to="/" className="back-btn">
              Go Back
            </NavLink>
          </div>
        </div>
      </section>
    );
  }

  return <div style={{ color: "white" }}>SingleMovies {id}</div>;
};

export default SingleMovie;
