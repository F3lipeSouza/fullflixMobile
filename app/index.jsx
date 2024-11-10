import { useRouter } from "expo-router";
import { Image, StyleSheet, View } from "react-native";

export default function Index() {

  const rota = useRouter();
  const vaiPraListaDeFilmes = () =>{
    rota.replace('/movies')
  };

  setTimeout(vaiPraListaDeFilmes, 5000);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://fullflix-xi.vercel.app/static/media/backgroundFullflix.60a6d4a9126182f0f885.png",
        }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  }
});
