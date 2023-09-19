import React from "react";

function MovieBar({ title, subTitle }) {
  return (
    <>
      <div class="section__title">
        <h2 class="movie__title">
          {title} <span className="red">{subTitle}</span>
        </h2>
        <select
          id="filter"
          class="filter__movies"
          onchange="filterMovies(event)"
        >
          <option value="" defaultValue>
            Sort
          </option>
          <option value="NEW_TO_OLD">Newest to Oldest</option>
          <option value="OLD_TO_NEW">Oldest to Newest</option>
        </select>
      </div>
    </>
  );
}

export default MovieBar;
