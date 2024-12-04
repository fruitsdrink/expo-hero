import { View, Text } from "react-native";
import React from "react";
import { Stack, Tabs } from "expo-router";

export default function Tabbar01TabsLayout() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false
        }}
      />
      <Tabs>
        <Tabs.Screen name="index" options={{ title: "首页" }} />
        <Tabs.Screen name="explore" options={{ title: "发现" }} />
        <Tabs.Screen name="profile" options={{ title: "我的" }} />
      </Tabs>
    </>
  );
}
