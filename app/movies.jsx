import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { getMovie } from "../api/api";
import { TouchableOpacity } from "react-native";
import { apiImageBase } from "../api/apiImageBase";
import styleMovies from "./styles/movies";


export default function Movies() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovie(setMovie);
  }, []);

  return (
    <View>
      <Text>finge que tem filme</Text>
      {movie.map((movieIten) => (
        <TouchableOpacity key={movieIten.id}>
          <View style={styleMovies.imgContainer}>
            <Image
              source={{ uri: `${apiImageBase}/${movieIten.poster_path}` }}
              style={styleMovies.image}
            />
          </View>
          <Text>{movieIten.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

