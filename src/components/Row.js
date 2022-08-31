import React, { useEffect, useState, useCallback } from "react";
import MovieModal from "../components/modal/MovieModal";
import customAxios from '../api/customAxios';
import '../css/Row.css';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";


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
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop={true}
            breakpoints={{
              1378: {
                slidesPerView: 5, // 한번에 보이는 슬라이드 개수
                slidesPerGroup: 5, // 몇개씩 슬라이드 할지
              },
              998: {
                slidesPerView: 5,
                slidesPerGroup: 5,
              },
              625: {
                slidesPerView: 4,
                slidesPerGroup: 4,
              },
              0: {
                slidesPerView: 3,
                slidesPerGroup: 3,
              },
            }}
          >
          <div id={id} className="row__posters">
            {movies.map((movie,index) => (
              <SwiperSlide key={index}>
              <img
                key={movie.id}
                onClick={() => handleModalClick(movie)}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`https://image.tmdb.org/t/p/original/${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                } `}
                alt={movie.name}
              />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        {modalOpen && (
          <MovieModal {...movieSelected} setModalOpen={setModalOpen}/>
        )}   
    </section> 
  )
}
