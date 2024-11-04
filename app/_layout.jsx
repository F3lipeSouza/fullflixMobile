import { Stack } from "expo-router";

export default function RootLayout() {



  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="movies" options={{headerStyle: {backgroundColor: "red"}, headerBackVisible:false}}/>
      <Stack.Screen name="details" options={{headerStyle:{backgroundColor:'red'}, headerBackVisible:false}}/>
    </Stack>
  );
}
