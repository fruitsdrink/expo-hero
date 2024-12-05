import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function ReanimatedTopTabs() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "顶部Tab动画",
          headerBackTitle: "返回"
        }}
      />
      <SafeAreaView style={styles.container}>
        <Tabs />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    margin: 12,
    gap: 12
  }
});

type TabItem = {
  icon: string;
  label: string;
};

type TabsProps = {
  dat: TabItem[];
};

const Tabs = () => {
  return (
    <View>
      <Text>Tabs</Text>
    </View>
  );
};
