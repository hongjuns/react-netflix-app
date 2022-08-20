import React, { useEffect, useState, useCallback } from "react";
import MovieModal from "../components/modal/MovieModal";
import customAxios from '../api/customAxios';
import '../css/Row.css';

export default function Row({ isLargeRow, title, id, fetchUrl }) {
  const [movies, setMovies] =  useState([]);
  const [modalOpen , setModalOpen] = useState(false); 
  const [movieSelected, setMovieSelected] = useState([]);
  
  const fetchMovieData = useCallback(async () => {
    const res = await customAxios.get(fetchUrl);
    setMovies(res.data.results);
  }, [fetchUrl]);

  const handleModalClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  }

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData]);

 return (
    <section className="row">
        <h2>{title}</h2>
        <div className="slider">
          <div className="slider__arrow-left">
            <span
              className="arrow"
              onClick={() => {
                document.getElementById(id).scrollLeft -= window.innerWidth - 80;
              }}
            >
              {"<"}
            </span>
          </div>
          <div id={id} className="row__posters">
            {movies.map((movie) => (
              <img
                key={movie.id}
                onClick={() => handleModalClick(movie)}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`https://image.tmdb.org/t/p/original/${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                } `}
                alt={movie.name}
              />
            ))}
          </div>
          <div className="slider__arrow-right">
            <span
              className="arrow"
              onClick={() => {
                document.getElementById(id).scrollLeft += window.innerWidth - 80;
              }}
             >
              {">"}
            </span>
          </div>
        </div> 
        {modalOpen && (
          <MovieModal {...movieSelected} setModalOpen={setModalOpen}/>
        )}   
    </section> 
  )
}
