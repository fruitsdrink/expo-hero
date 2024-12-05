import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { NumberModule } from "@faker-js/faker/.";

export default function ReanimatedCounter() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "计数器动画",
          headerBackTitle: "返回",
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Ticker value={999} />
      </View>
    </>
  );
}

type TickerProps = {
  value: number;
};

const Ticker: React.FC<TickerProps> = ({ value }) => {
  const splittedValue = value.toString().split("");

  return (
    <View>
      {splittedValue.map((num, index) => {
        return <Text key={`tick-item-${num}`}>{num}</Text>;
      })}
    </View>
  );
};
