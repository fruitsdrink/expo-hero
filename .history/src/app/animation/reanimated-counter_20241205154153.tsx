import { View, Text, TextProps, Button } from "react-native";
import React, { useState } from "react";
import { Stack } from "expo-router";
import { MotiView } from "moti";

const numbersToNice = [...Array(10).keys()];

export default function ReanimatedCounter() {
  const [value, setValue] = useState(12345);
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
        <Ticker value={value} />

        <View>
          <Button
            title="Random Value"
            onPress={() => {
              setValue(Math.floor(Math.random() * 100000));
            }}
          />
        </View>
      </View>
    </>
  );
}

type TickerProps = {
  value: number;
  fontSize?: number;
};

const Ticker: React.FC<TickerProps> = ({ value, fontSize = 50 }) => {
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
        overflow: "hidden",
      }}
    >
      <MotiView
        style={{
          backgroundColor: "rgba(0,255,0,0.5)",
        }}
        animate={{
          translateY: -fontSize * 1.1 * number,
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
      </MotiView>
    </View>
  );
};

const Tick: React.FC<TextProps> = ({ children, ...rest }) => {
  return <Text {...rest}>{children}</Text>;
};
