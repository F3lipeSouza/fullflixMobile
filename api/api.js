import axios from "axios";


export const movies = (setState)=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${ApiKey}`)
    .then((response)=>{
        setState(response.data.results);
    })
    .catch((error)=>{
        console.error(error);
    });
}