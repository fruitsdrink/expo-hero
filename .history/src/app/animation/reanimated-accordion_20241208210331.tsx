import { View, Text, type ViewProps } from "react-native";
import type React from "react";
import { Stack } from "expo-router";
import { faker } from "@faker-js/faker";
import Animated, {
  FadeInDown,
  FadeInUp,
  FadeOutDown,
  LinearTransition,
  type AnimatedProps
} from "react-native-reanimated";
import { useRef, useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from "@tanstack/react-query";

const _spacing = 20;
const _dummySentences = [...Array(20).keys()].map(() => {
  return faker.company.catchPhrase();
});

async function wait(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

const queryClient = new QueryClient();

export default function ReanimatedAccordionScreen() {
  const [isActive, setIsActive] = useState(false);

  const {} = useQuery({
    queryKey: ["DummyData"],
    queryFn: async () => {
      const data = fetch("https://dummyjson.com/comments")
        .then((res) => res.json())
        .then((res) => res.comments);

      await wait(3000);
      return data;
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
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
                    entering={FadeInDown.springify().damping(80).stiffness(200)}
                    exiting={FadeOutDown.springify().damping(80).stiffness(200)}
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
                return (
                  <Text key={`second-${index.toString()}`}>{sentence}</Text>
                );
              })}
            </Animated.View>
          </View>
        </Animated.ScrollView>
      </View>
    </QueryClientProvider>
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
