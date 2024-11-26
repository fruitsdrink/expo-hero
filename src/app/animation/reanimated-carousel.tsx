import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function ReanimatedCarouselScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ title: "Reanimated轮播图", headerBackTitle: "返回" }}
      />
      <Text>ReanimatedCarousel</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});
