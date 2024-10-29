import { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { getMovie } from "../api/api";
import { TouchableOpacity } from "react-native";


export default function Movies(){

    const [movie, setMovie] = useState([]);
    
    useEffect(()=>{
        getMovie(setMovie)
    },[]);

    return(
        <View>
            <Text>finge que tem filme</Text>
            {movie.map((movieIten)=>(
                <TouchableOpacity key={movieIten.id}>
                    <Text>
                        {movieIten.title}
                    </Text>
                </TouchableOpacity>
            ))}
        </View>
    )
}