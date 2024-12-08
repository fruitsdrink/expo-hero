import { View, Text, type ViewProps } from "react-native";
import type React from "react";
import { Stack } from "expo-router";
import { faker } from "@faker-js/faker";
import Animated, {
  FadeInUp,
  FadeOutDown,
  LinearTransition,
  type AnimatedProps
} from "react-native-reanimated";
import { useState } from "react";

const _spacing = 20;
const _dummySentences = [...Array(20).keys()].map(() => {
  return faker.company.catchPhrase();
});

export default function ReanimatedAccordionScreen() {
  const [isActive, setIsActive] = useState(false);

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
      <Animated.ScrollView contentContainerStyle={{}}>
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
            onTouchStart={() => setIsActive(!isActive)}
          >
            <View style={{ gap: _spacing / 2 }}>
              <Text style={{ color: "#fff" }}>title</Text>
              {isActive && (
                <Animated.View
                  style={{
                    height: 200,
                    width: "100%",
                    borderRadius: _spacing / 2,
                    backgroundColor: "#f00"
                  }}
                  // entering={FadeInUp.springify().damping(80).stiffness(200)}
                  // exiting={FadeOutDown.springify().damping(80).stiffness(200)}
                  layout={LinearTransition.springify()
                    .damping(80)
                    .stiffness(200)}
                />
              )}
            </View>
          </Toggle>
          <Animated.View
            style={{
              padding: 12,
              backgroundColor: "rgba(0,0,0,0.1)",
              borderRadius: _spacing
            }}
            layout={LinearTransition.springify().damping(80).stiffness(200)}
          >
            {_dummySentences.slice(10, -1).map((sentence, index) => {
              return <Text key={`second-${index.toString()}`}>{sentence}</Text>;
            })}
          </Animated.View>
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
          padding: 20,
          overflow: "hidden"
        },
        style
      ]}
      {...rest}
      layout={LinearTransition.springify().damping(80).stiffness(200)}
    >
      {children}
    </Animated.View>
  );
};
