import { View, Text } from "react-native";
import React from "react";
import { type Href, Link, Stack } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const tutorials = [
  {
    id: "1",
    title: "动画4步",
    url: "/animation/reanimated-tutorial/animated-4-steps" as Href,
    youtube: "https://youtu.be/NRHoyKgb42E?si=M1r1Brzuqd9KAvhz" as Href
  }
];

export default function ReanimatedTutorialHomeScreen() {
  return (
    <View className="justify-center p-4">
      <Stack.Screen options={{ title: "Reanimated 练习" }} />
      <View>
        {tutorials.map((tutorial) => (
          <View
            key={tutorial.id}
            className="flex-row gap-4 items-center p-4 bg-white rounded-md shadow-rn"
          >
            <Link href={tutorial.youtube}>
              <FontAwesome name="youtube-square" size={24} color="black" />
            </Link>
            <Link href={tutorial.url} className="flex-1">
              <Text>{tutorial.title}</Text>
            </Link>
          </View>
        ))}
      </View>
    </View>
  );
}
