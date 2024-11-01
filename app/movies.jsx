import { useEffect, useState } from "react";
import { ScrollView,} from "react-native";
import { getMovie } from "../api/api";
import { apiImageBase } from "../api/apiImageBase";
import { ImageMovie, ImgContainer, TitleMovie,Container, Card } from "./styles/movies";

export default function Movies() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    getMovie(setMovie);
  }, []);

  return (
    <ScrollView>
      <Container>
        {movie.map((movieIten) => (
          <Card key={movieIten.id}>
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
