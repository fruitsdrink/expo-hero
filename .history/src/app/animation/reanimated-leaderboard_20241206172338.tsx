import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function ReanimatedLeaderboard() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "排行榜",
          headerBackTitle: "返回"
        }}
      />
      <View>
        <Text>ReanimatedLeaderboard</Text>
      </View>
    </>
  );
}
