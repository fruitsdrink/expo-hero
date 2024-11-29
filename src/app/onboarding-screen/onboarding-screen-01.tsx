import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function OnboardingScreen01() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "引导屏01",
          headerBackTitle: "返回"
        }}
      />
      <View>
        <Text>OnboardingScreen01</Text>
      </View>
    </>
  );
}
