import { StyleSheet, Text, View } from "react-native";

export default function BannerPage() {
  return (
    <View
      style={style.container}
    >
      <Text style={style.title}>FullFlix</Text>
    </View>
  );
}


const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width:'80%',
    marginLeft:'10%'
  },
  title:{
    color:'red',
  }
})