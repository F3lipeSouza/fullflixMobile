import { Stack } from "expo-router";
import { Header } from "react-native/Libraries/NewAppScreen";



export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="movies" />
    </Stack>
  );
}
