import { View, Text } from "react-native";
import type React from "react";
import { Stack } from "expo-router";
import { faker } from "@faker-js/faker";

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
          gap: 20
        }}
      >
        <Toggle>
          <Text>Toggle</Text>
        </Toggle>
        <View
          style={{
            padding: 12,
            backgroundColor: "rgba(0,0,0,0.1)",
            borderRadius: 12
          }}
        >
          {[...Array(2).keys()].map((index) => {
            return <Text key={index}>{faker.company.catchPhrase()}</Text>;
          })}
        </View>
      </View>
    </>
  );
}

type ToggleProps = {
  children: React.ReactNode;
};
const Toggle = ({ children }: ToggleProps) => {
  return (
    <View
      style={{
        backgroundColor: "#333",
        padding: 20
      }}
    >
      <Text>title</Text>
      {children}
    </View>
  );
};
