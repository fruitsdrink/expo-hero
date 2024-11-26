import { Stack } from "expo-router";
import { TamaguiProvider } from "@tamagui/core";

import config from "../../tamagui.config";

import "../../global.css";

export default function RootLayout() {
  return (
    <TamaguiProvider config={config}>
      <Stack />
    </TamaguiProvider>
  );
}
