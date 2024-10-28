import { Image, StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={style.container}>
      <Image
      source={{uri: 'https://fullflix-xi.vercel.app/static/media/backgroundFullflix.60a6d4a9126182f0f885.png'}}
      style={style.image}
      />
    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black'
  },
  image:{
    width:'100%',
    height:'100%',
    resizeMode:'contain'
  }
})
