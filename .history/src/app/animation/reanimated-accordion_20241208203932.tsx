import { View, Text, type ViewProps } from "react-native";
import type React from "react";
import { Stack } from "expo-router";
import { faker } from "@faker-js/faker";
import Animated, { type AnimatedProps } from "react-native-reanimated";
import { useState } from "react";

const _spacing = 20;
const _dummySentences = [...Array(20).keys()].map(() => {
  return faker.company.catchPhrase();
});

export default function ReanimatedAccordionScreen() {
  const [active, setActive] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff"
      }}
    >
      <Stack.Screen
        options={{
          title: "手风琴",
          headerBackTitle: "返回"
        }}
      />
      <Animated.ScrollView
        contentContainerStyle={{
          paddingTop: 200
        }}
      >
        <View
          style={{
            gap: _spacing,
            paddingHorizontal: _spacing
          }}
        >
          <View
            style={{
              padding: 12,
              backgroundColor: "rgba(0,0,0,0.1)",
              borderRadius: _spacing
            }}
          >
            {_dummySentences.slice(0, 10).map((sentence, index) => {
              return <Text key={index.toString()}>{sentence}</Text>;
            })}
          </View>
          <Toggle
            style={{ borderRadius: _spacing }}
            onTouchStart={() => setActive(!active)}
          >
            <View>
              <Text style={{ color: "#fff" }}>title</Text>
              <Text style={{ color: "#fff" }}>
                {active ? "Active" : "Inactive"}
              </Text>
            </View>
          </Toggle>
          <View
            style={{
              padding: 12,
              backgroundColor: "rgba(0,0,0,0.1)",
              borderRadius: _spacing
            }}
          >
            {_dummySentences.slice(10, -1).map((sentence, index) => {
              return <Text key={`second-${index.toString()}`}>{sentence}</Text>;
            })}
          </View>
        </View>
      </Animated.ScrollView>
    </View>
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
      {children}
    </Animated.View>
  );
};
