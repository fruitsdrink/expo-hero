import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

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
        <Text>ReanimatedLeaderboard</Text>
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
