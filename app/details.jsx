import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { apiImageBase } from "../api/apiImageBase";
import {
  ImageContainer,
  ImageDetails,
  TextDetails,
  Title,
  UnderTitle,
  Layout,
  BtnVoltar,
  BtnVoltarText,
  SinopseText,
} from "./styles/details/details";
import { useRouter } from "expo-router";

export default function details() {
  const [movieDetails, setMovieDetails] = useState();
  const route = useRouter();
  const voltar = () => {
    route.replace("/movies");
  };

  useEffect(() => {
    showDetails = async () => {
      try {
        const detalhesDoFilme = await AsyncStorage.getItem("details");
        setMovieDetails(
          detalhesDoFilme != null ? JSON.parse(detalhesDoFilme) : null
        );
      } catch (error) {
        console.log("erro ao reproduzir detalhes", error);
      }
    };
    showDetails();
  }, []);

  if (!movieDetails) {
    return <Text>carregando...</Text>;
  }

  return (
    <ScrollView>
      <Layout>
        <ImageContainer>
          <ImageDetails
            source={{ uri: `${apiImageBase}/${movieDetails.poster_path}` }}
          />
        </ImageContainer>

        <Title>{movieDetails.title}</Title>

        <UnderTitle>Sinopse</UnderTitle>

        <SinopseText>{movieDetails.overview}</SinopseText>

        <UnderTitle>Nota</UnderTitle>

        <TextDetails>{movieDetails.vote_average.toFixed(1)}</TextDetails>

        <UnderTitle>Data de lançamento</UnderTitle>

        <TextDetails>{movieDetails.release_date}</TextDetails>

        <BtnVoltar onPress={() => voltar()}>
          <BtnVoltarText>Voltar</BtnVoltarText>
        </BtnVoltar>
      </Layout>
    </ScrollView>
  );
}
