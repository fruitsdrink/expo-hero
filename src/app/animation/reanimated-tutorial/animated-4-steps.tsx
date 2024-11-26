import { View, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Stack } from "expo-router";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";

export default function Animation4StepsScreen() {
  // 1. 创建动画变量
  const opacity = useSharedValue(0);

  // 2. 创建动画样式
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value
    };
  });

  useEffect(() => {
    // 4 改变动画变量
    const fadeIn = () => {
      opacity.value = withTiming(1, { duration: 2000 });
    };

    fadeIn();
  }, [opacity]);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "动画4步", headerBackTitle: "返回" }} />
      {/* 3. 应用动画样式 */}
      <Animated.View style={[animatedStyle, styles.circle]} />
      <Text
        style={{
          marginTop: 8
        }}
      >
        淡入淡出效果
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  circle: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    backgroundColor: "orange",
    borderRadius: 50
  }
});
