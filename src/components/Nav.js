import React, { useState, useEffect } from "react";
import { useNavigate , useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import "../css/Nav.css"

export default function Nav() {
    const [show , setShow] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();
    const useLocationParm = useLocation();
    const isLogined = useSelector(state => state.auth.isLogined);

    useEffect(() => {
        window.addEventListener("scroll",() => {
            if (window.scrollY > 50) {
              setShow(true);
            } else {
              setShow(false);
            }
        })
        return () => {
            window.removeEventListener("scroll", () => {});
        }
    },[]);

    const handleReplace = () => {
        if (useLocationParm.pathname === "/"){
            setSearchValue("");
            window.location.reload();
        }else {
            setSearchValue("");
            navigate("/");
        }
    }

    const handleChangeSearch = (e) => {
        setSearchValue(e.target.value);
        navigate(`/search?q=${e.target.value}`);
    }

    return (
    <nav className={`nav ${show ? "navBlack" : ""}`}>
        <img
             alt="Netflix logo"
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
             className="navLogo"
             onClick={handleReplace}
        />
        
        <input 
            value={searchValue}
            onChange={handleChangeSearch} 
            className={`navInput ${show ? "navInputWhite" : ""} ${!isLogined ? "hide" : ""} `}
            type="text"
            placeholder="영화를검색해주세요 "
        />

        <img
        alt="User logged"
        src="https://occ-0-4796-988.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABbme8JMz4rEKFJhtzpOKWFJ_6qX-0y5wwWyYvBhWS0VKFLa289dZ5zvRBggmFVWVPL2AAYE8xevD4jjLZjWumNo.png?r=a41"
        className={`navAvatar ${!isLogined ? "hide" : ""}`}
        />
    </nav>
  );
}
