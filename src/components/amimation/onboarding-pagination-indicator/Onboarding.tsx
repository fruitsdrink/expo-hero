import type React from "react";
import { View, Text } from "react-native";
import { Button } from "./Button";
import Animated, {
  FadeInDown,
  FadeInLeft,
  FadeOutUp,
  LinearTransition
} from "react-native-reanimated";
import { Pagination } from "./Pagination";

type OnboardingProps = {
  total: number;
  selectedIndex: number;
  onIndexChange: (index: number) => void;
};

export const Onboarding: React.FC<OnboardingProps> = ({
  total,
  selectedIndex,
  onIndexChange
}) => {
  return (
    <View className="gap-4 p-2">
      <Pagination selectedIndex={selectedIndex} total={total} />
      <View className="flex-row">
        {selectedIndex > 0 && (
          <Button
            className={"bg-[#ddd]"}
            onPress={() => onIndexChange(selectedIndex - 1)}
          >
            <Text>上一步</Text>
          </Button>
        )}
        <Button
          className={"bg-[#036bfb] flex-1"}
          onPress={() => {
            if (selectedIndex === total - 1) return;
            onIndexChange(selectedIndex + 1);
          }}
        >
          {selectedIndex === total - 1 ? (
            <Animated.Text
              className={"text-white"}
              key={"finish"}
              entering={FadeInDown.springify().damping(80).stiffness(200)}
              exiting={FadeOutUp.springify().damping(80).stiffness(200)}
              layout={LinearTransition.springify().damping(80).stiffness(200)}
            >
              完成
            </Animated.Text>
          ) : (
            <Animated.Text
              className={"text-white"}
              key={"next"}
              entering={FadeInDown.springify().damping(80).stiffness(200)}
              exiting={FadeOutUp.springify().damping(80).stiffness(200)}
              layout={LinearTransition.springify().damping(80).stiffness(200)}
            >
              下一步
            </Animated.Text>
          )}
        </Button>
      </View>
    </View>
  );
};
