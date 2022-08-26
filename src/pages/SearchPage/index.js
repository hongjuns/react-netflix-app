import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import customAxios from '../../api/customAxios';
import "../../css/SearchPage.css"
import Movies from '../SearchPage/Movies'
export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  
  const useQuery = () => {
      return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  const searchTerm = query.get("q");
  
  useEffect( () => {
    if(searchTerm){
      fetchSearchMovie(searchTerm);
    }
  },[searchTerm]);

  const fetchSearchMovie = async (searchTerm) => {
    try{
      const request = await customAxios.get(
        `/search/multi?include_adult=false&query=${searchTerm}`
      );
      setSearchResults(request.data.results);
    }catch (error){
      console.log("error : " +error);
    }
  }

  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <section className="search-container">
       {searchResults.map((movie) => {
         return (<Movies movie={movie} key={movie.id} movieKey={movie.id}/>)
        })}
     </section>
    ) : (
      <section className="no-results">
        <div className="no-results__text">
          <p>
            찾고자하는 검색어"{searchTerm}"에 맞는 영화가 없습니다.
          </p>
        </div>
      </section>
    )
  }
  return  renderSearchResults();
  
}
