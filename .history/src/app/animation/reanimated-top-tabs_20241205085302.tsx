import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function ReanimatedTopTabs() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "顶部Tab动画",
          headerBackTitle: "返回"
        }}
      />
      <View>
        <Text>ReanimatedTopTabs</Text>
      </View>
    </>
  );
}
