import { View, Text } from "react-native";
import type React from "react";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  type SharedValue
} from "react-native-reanimated";

type DotProps = {
  index: number;
  animation: SharedValue<number>;
};
export const Dot: React.FC<DotProps> = ({ index, animation }) => {
  const stylez = useAnimatedStyle(() => {
    return {
      backgroundColor: interpolateColor(
        animation.value,
        [index - 1, index, index + 1],
        ["#aaa", "#fff", "#fff"]
      )
    };
  });
  return (
    <View className="justify-center items-center w-[24px] aspect-square">
      <Animated.View className="w-2 h-2 rounded-full" style={stylez} />
    </View>
  );
};
