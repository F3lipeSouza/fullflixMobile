import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
      <View>
        <Text>Index</Text>
        <Link href={'/movies'}>ver filmes</Link>
      </View>
    );
}
