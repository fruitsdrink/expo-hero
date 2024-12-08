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
          backgroundColor: "white"
        }}
      >
        <Toggle>
          <Text>Toggle</Text>
        </Toggle>
        <View>
          {[...Array(2).keys()].map((index) => {
            return <Text>{faker.company.catchPhrase()}</Text>;
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
