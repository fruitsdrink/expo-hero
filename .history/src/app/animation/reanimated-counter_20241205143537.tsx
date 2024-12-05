import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function ReanimatedCounter() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "计数器动画",
          headerBackTitle: "返回",
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Text>ReanimatedCounter</Text>
      </View>
    </>
  );
}
