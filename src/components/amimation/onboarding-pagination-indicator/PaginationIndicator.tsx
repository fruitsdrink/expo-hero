import { View, Text } from "react-native";
import type React from "react";
import type { SharedValue } from "react-native-reanimated";
import Animated, { useAnimatedStyle } from "react-native-reanimated";

type PaginationIndicatorProps = {
  animation: SharedValue<number>;
};
const PaginationIndicator: React.FC<PaginationIndicatorProps> = ({
  animation
}) => {
  const stylez = useAnimatedStyle(() => {
    return {
      width: 24 + 24 * animation.value
    };
  });
  return (
    <Animated.View
      className={
        "bg-[#29be56] w-[24px] h-[24px] rounded-[24px] absolute left-0 top-0"
      }
      style={stylez}
    />
  );
};

export default PaginationIndicator;
