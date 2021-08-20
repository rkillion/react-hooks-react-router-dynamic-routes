import React from "react";
import { useParams, useRouteMatch } from "react-router-dom";

function MovieShow( {movies} ) {

    const params = useParams();
    console.log(params);
    const route = useRouteMatch();
    console.log(route);

  return (
    <div>
      <h3>{movies[params.movieId].title}</h3>
    </div>
  );
}

export default MovieShow;