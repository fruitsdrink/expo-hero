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
        <Ticker />
      </View>
    </>
  );
}

type TickerProps = {
  value?: number;
};

const Ticker: React.FC<TickerProps> = ({ value = 12345 }) => {
  const splittedValue = value.toString().split("");

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {splittedValue.map((num, index) => {
          return <Text key={`tick-item-${index}`}>{num}</Text>;
        })}
      </View>
    </View>
  );
};

type TickerListProps = {
  value: number;
};
const TickerList = () => {
  return (
    <View>
      <Text>list</Text>
    </View>
  );
};
