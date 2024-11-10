import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { getMovie } from "../api/api";
import { apiImageBase } from "../api/apiImageBase";
import {
  ImageMovie,
  ImgContainer,
  TitleMovie,
  Container,
  Card,
} from "./styles/movies";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Movies() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovie(setMovie);
  }, []);

  const route = useRouter();

  const viewDetails = async (movieId) => {
    try {
      const jsonValue = JSON.stringify(movieId);
      await AsyncStorage.setItem("details", jsonValue);
      route.replace('/details')
    } catch (error) {
      console.error("erro ao salvar no asyncStorage");
    }
  };

  return (
    <ScrollView>
      <Container>
        {movie.map((movieIten) => (
          <Card key={movieIten.id} onPress={() => viewDetails(movieIten)}>
            <ImgContainer>
              <ImageMovie
                source={{ uri: `${apiImageBase}/${movieIten.poster_path}` }}
              />
            </ImgContainer>
            <TitleMovie>{movieIten.title}</TitleMovie>
          </Card>
        ))}
      </Container>
    </ScrollView>
  );
}
