import { View, Text, Image } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import Animated, { FadeInRight } from "react-native-reanimated";

const users = [
  { name: "Alice", score: 12 },
  { name: "Bob", score: 22 },
  { name: "Charlie", score: 4 },
  { name: "Catalin", score: 15 },
  { name: "Adam", score: 33 },
  { name: "David", score: 10 },
  { name: "Eve", score: 31 }
];
const _avatarSize = 28;
const _spacing = 4;
const _stagger = 50;

type User = (typeof users)[0];

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
      <View
        style={{
          flexDirection: "row",
          gap: _spacing
        }}
      >
        {users.map((user, index) => {
          return (
            <Place
              key={index.toString()}
              user={user}
              index={index}
              onFinished={index ===users.length ?  (() => {
                console.log("finished");
              }): null
            />
          );
        })}
      </View>
    </View>
  );
}

type PlaceProps = {
  user: User;
  index: number;
  onFinished?: () => void;
};
function Place({ user, index, onFinished }: PlaceProps) {
  return (
    <Animated.View
      entering={FadeInRight.delay(index * _stagger)
        .springify()
        .damping(80)
        .stiffness(200)}
      // style={{
      //   transform: [{ translateY: index * _stagger }]
      // }}
    >
      <View
        style={{
          width: _avatarSize,
          aspectRatio: 1
        }}
      >
        <Image
          source={{ uri: `https://i.pravatar.cc/150?u=${user.name}` }}
          style={{
            flex: 1,
            borderRadius: _avatarSize / 2
          }}
        />
      </View>
    </Animated.View>
  );
}
