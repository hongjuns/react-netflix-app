import axios from "axios";

const instance = axios.create({
    baseURL :"https://api.themoviedb.org/3",
    params : {
        api_key : "9c88b342784a2461846b9307e253df9f",
        language : "ko-KR"
    }
});

export default instance;