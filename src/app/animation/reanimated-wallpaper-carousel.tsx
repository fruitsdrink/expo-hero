import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function ReanimatedWallpaperCarousel() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "视差轮播图",
          headerBackTitle: "返回",
          headerShown: false
        }}
      />
      <View style={styles.container}>
        <Text>ReanimatedWallpaperCarousel</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});
