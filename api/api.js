import axios from "axios";
import { apikey } from "./apikey";


export const getMovie = async(setState)=>{
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}`);
        setState(response.data.results);
    } catch (error) {
        console.error('deu erro ai', error)
    }};