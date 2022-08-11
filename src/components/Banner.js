import customAxios from '../api/customAxios';
import React ,{useEffect ,useState} from 'react'
import requests from '../api/requests';
import '../css/Banner.css';

export default function Banner() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    //현재 상영중인 영화 정보를 가져오기(여러 영화)
    const request = await customAxios.get(requests.fetchNowPlaying);
    //여러 영화 중 영화 하나의 ID를 가져오기 
    const movieId = request.data.results[Math.floor(Math.random() * request.data.results.length)].id
    // 특정 영화의 더 상세한 정보를 가져오기(비디오 정보도 포함)
    const {data : movieDetail} = await customAxios.get(`movie/${movieId}`, {
        params: { append_to_response: "videos" },
    });
    setMovie(movieDetail);
  }

  const truncate = (str, n) => {
    if (str) {
      return str.length > n ? str.substr(0, n - 1) + "..." : str;
    }      
  };

  return (
    <header 
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
    >
      <div className="bannerContents">
        <h1 className="bannerTitle">
          {movie.title || movie.name || movie.original_name}
        </h1>
        <div className="bannerButtons"> 
          <button className='bannerButton play'>
            play
          </button>
          <button className="bannerButton info">
            More Information 
          </button>
        </div>
        <h1 className="bannerDescription">
            {truncate(movie.overview, 100)}
        </h1>
      </div>
      <div className="bannerFadeBottom" />   
    </header>
  )
}
