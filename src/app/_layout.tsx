import { Stack } from "expo-router";
import { useFonts } from "expo-font";

import "../../global.css";

export default function RootLayout() {
  useFonts({
    "Roboto-Black": require("@assets/fonts/Roboto-Black.ttf"),
    "Roboto-Bold": require("@assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Regular": require("@assets/fonts/Roboto-Regular.ttf")
  });

  return <Stack />;
}
