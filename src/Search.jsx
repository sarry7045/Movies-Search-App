import React from "react";
import { useCustomHook } from "./Context";

const Search = () => {
  const { query, setquery, isError } = useCustomHook();
  return (
    <>
      <section className="search-section">
        <h2>Search Your Favourite Movies..</h2>
        <form action="#0" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="Search here"
              value={query}
              onChange={(e) => setquery(e.target.value)}
            />
          </div>
        </form>
        <div className="card-error">
          <p>{isError.show && isError.msg} </p>
        </div>
      </section>
    </>
  );
};

export default Search;
