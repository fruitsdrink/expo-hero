import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const users = [
  { name: "Alice", score: 12 },
  { name: "Bob", score: 22 },
  {
    name: "Charlie",
    score: 4
  },
  {
    name: "Catalin",
    score: 15
  }
];

export default function ReanimatedLeaderboard() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "排行榜",
          headerBackTitle: "返回",
          headerShown: false
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff"
        }}
      >
        <LeaderBoard />
      </View>
    </>
  );
}

function LeaderBoard() {
  return (
    <View>
      <Text>LeaderBoard</Text>
    </View>
  );
}
