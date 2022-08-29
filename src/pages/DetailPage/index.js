import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import customAxios from '../../api/customAxios';
export default function DetailPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
    
  useEffect(() => {
    fetchDetailhMovie(movieId);
  }, [movieId])
  
  const fetchDetailhMovie = async (movieId) => {
    const request = await customAxios.get(`/movie/${movieId}`);
    setMovie(request.data);
  } 

  if (!movie){
    return <div>...loading</div>;
  }else {
    if(movie?.backdrop_path){
      return (
        <section>
          <img
            className="modal__poster-img"
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt="poster"
          />
        </section>
      );
    }
  }
}
