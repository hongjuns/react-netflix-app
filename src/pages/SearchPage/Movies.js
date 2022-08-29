import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Movies({movie,movieKey}) {
    const navigate = useNavigate();
    const resultsDom = () =>{
        if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImageUrl =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div className="movie" key={movieKey}>
                <div
                  className="movie__column-poster"
                  onClick={()=> navigate(`/${movieKey}`)
                 }
                  >
                  <img
                    src={movieImageUrl}
                    alt="movie"
                    className="movie__poster"
                  />
                </div>
              </div>
            );
          }
    }
  return resultsDom ();
}
