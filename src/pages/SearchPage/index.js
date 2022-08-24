import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import customAxios from '../../api/customAxios';
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
      console.log(request);
      setSearchResults(request.data.results);
    }catch (error){
      console.log("error : " +error);
    }
  }

  return (
    <div></div>
  )
}