import { View, Text, type PressableProps, Pressable } from "react-native";
import type { AnimatedProps } from "react-native-reanimated";
import type React from "react";
import Animated, {
  FadeInLeft,
  FadeOutLeft,
  LinearTransition
} from "react-native-reanimated";
import { cn } from "@/lib/utils";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
export const Button: React.FC<AnimatedProps<PressableProps>> = ({
  children,
  style,
  className,
  ...rest
}) => {
  return (
    <AnimatedPressable
      className={cn(
        "justify-center items-center px-4 rounded-full h-[42px]",
        className
      )}
      style={[style]}
      entering={FadeInLeft.springify().damping(80).stiffness(200)}
      exiting={FadeOutLeft.springify().damping(80).stiffness(200)}
      layout={LinearTransition.springify().damping(80).stiffness(200)}
      {...rest}
    >
      {children}
    </AnimatedPressable>
  );
};
