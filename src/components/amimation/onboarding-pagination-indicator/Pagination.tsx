import { View, Text } from "react-native";
import type React from "react";
import { Dot } from "./Dot";
import { useDerivedValue, withSpring } from "react-native-reanimated";
import PaginationIndicator from "./PaginationIndicator";

type PaginationProps = {
  selectedIndex: number;
  total: number;
};
export const Pagination: React.FC<PaginationProps> = ({
  selectedIndex,
  total
}) => {
  const animation = useDerivedValue(() => {
    return withSpring(selectedIndex, {
      damping: 80,
      stiffness: 200
    });
  });
  return (
    <View className="justify-center items-center">
      <View className="flex-row">
        <PaginationIndicator animation={animation} />
        {[...Array(total).keys()].map((index) => (
          <Dot key={`dot-${index}`} index={index} animation={animation} />
        ))}
      </View>
    </View>
  );
};
