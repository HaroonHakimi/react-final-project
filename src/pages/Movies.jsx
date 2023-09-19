import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import MovieBar from "../components/ui/MovieBar";

function Movies({ event }) {
  // async function fetchMovie()
  // {
  //     const movie = axios.get(``)
  // }

  // useEffect(() => {
  //     fetchMovie()
  // },[])
 
  function filterMovies() {}

  return (
    <>
      <MovieBar title={`Search Results for ${event}`} subTitle={" "} />
      <div class="movies">
        
      </div>
    </>
  );
}

export default Movies;
