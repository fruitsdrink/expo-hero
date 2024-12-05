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
  const splitValue = value.toString().split("");

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {splitValue.map((num, index) => {
          return (
            <TickerList
              key={`tick-item-${index}`}
              number={parseInt(num)}
              fontSize={fontSize}
            />
          );
        })}
      </View>
    </View>
  );
};

type TickerListProps = {
  number: number;
  fontSize: number;
};
const TickerList: React.FC<TickerListProps> = ({ number, fontSize }) => {
  return (
    <View
      style={{
        height: fontSize,
        backgroundColor: "red",
        // overflow: "hidden",
      }}
    >
      <View
        style={{
          backgroundColor: "rgba(0,255,0,0.5)",
          transform: [
            {
              translateY: -fontSize * 1.1 * number,
            },
          ],
        }}
      >
        {numbersToNice.map((num) => {
          return (
            <Tick
              key={`tick-${num}`}
              style={{
                fontSize,
                lineHeight: fontSize * 1.1,
                fontVariant: ["tabular-nums"],
              }}
            >
              {num}
            </Tick>
          );
        })}
      </View>
    </View>
  );
};

const Tick: React.FC<TextProps> = ({ children, ...rest }) => {
  return <Text {...rest}>{children}</Text>;
};
