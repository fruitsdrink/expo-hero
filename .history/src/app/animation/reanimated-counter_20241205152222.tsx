import { View, Text, TextProps } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const numbersToNice = [...Array(10).keys()];

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
  fontSize?: number;
};

const Ticker: React.FC<TickerProps> = ({ value = 12345, fontSize = 50 }) => {
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
          return (
            <TickerList
              key={`tick-item-${index}`}
              number={num}
              fontSize={fontSize}
            />
          );
        })}
      </View>
    </View>
  );
};

type TickerListProps = {
  number: string;
  fontSize: number;
};
const TickerList: React.FC<TickerListProps> = ({ number, fontSize }) => {
  return (
    <View
      style={{
        height: fontSize,
        backgroundColor: "red",
      }}
    >
      {numbersToNice.map((num) => {
        return (
          <Tick
            key={`tick-${num}`}
            style={{
              fontSize,
              lineHeight: fontSize * 1.1,
            }}
          >
            {num}
          </Tick>
        );
      })}
    </View>
  );
};

const Tick: React.FC<TextProps> = ({ children, ...rest }) => {
  return <Text {...rest}>{children}</Text>;
};
