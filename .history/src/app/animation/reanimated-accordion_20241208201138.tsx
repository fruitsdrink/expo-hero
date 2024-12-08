import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function ReanimatedAccordionScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "手风琴",
          headerBackTitle: "返回"
        }}
      />
      <View>
        <Text>ReanimatedAccordion</Text>
      </View>
    </>
  );
}
