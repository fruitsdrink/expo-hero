import { View, Text, type ViewProps } from "react-native";
import type React from "react";
import { Stack } from "expo-router";
import { faker } from "@faker-js/faker";
import Animated, { type AnimatedProps } from "react-native-reanimated";

const _spacing = 20;

export default function ReanimatedAccordionScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "手风琴",
          headerBackTitle: "返回"
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          backgroundColor: "white",
          gap: _spacing,
          paddingHorizontal: _spacing
        }}
      >
        <Toggle>
          <Text>Toggle</Text>
        </Toggle>
        <View
          style={{
            padding: 12,
            backgroundColor: "rgba(0,0,0,0.1)",
            borderRadius: _spacing
          }}
        >
          {[...Array(10).keys()].map((index) => {
            return <Text key={index}>{faker.company.catchPhrase()}</Text>;
          })}
        </View>
      </View>
    </>
  );
}

type ToggleProps = AnimatedProps<ViewProps> & {
  children: React.ReactNode;
};
const Toggle = ({ children, style, ...rest }: ToggleProps) => {
  return (
    <Animated.View
      style={[
        {
          backgroundColor: "#333",
          padding: 20
        },
        style
      ]}
      {...rest}
    >
      <Text>title</Text>
      {children}
    </Animated.View>
  );
};
