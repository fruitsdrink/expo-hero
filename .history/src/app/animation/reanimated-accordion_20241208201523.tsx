import { View, Text } from "react-native";
import type React from "react";
import { Stack } from "expo-router";

export default function ReanimatedAccordionScreen() {
	return (
    <>
      <Stack.Screen
        options={{
          title: "手风琴",
          headerBackTitle: "返回"
        }}
      />
      <View>
        <Toggle><
          <Text>Toggle</Text>
        </Toggle>
      </View>
	</>
  )
}

type ToggleProps = {
	children: React.ReactNode;
};
const Toggle = ({ children }: ToggleProps) => {
	return <View>{children}</View>;
};
