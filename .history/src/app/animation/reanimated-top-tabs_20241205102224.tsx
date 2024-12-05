import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import type React from "react";
import { Stack } from "expo-router";
import type { icons } from "lucide-react-native";

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

type IconNames = keyof typeof icons;
type TabItem = {
  icon: string;
  label: string;
};

type TabsProps = {
  data: TabItem[];
  selectedIndex: number;
  onChange: (index: number) => void;
  activeColor?: string;
  inactiveColor?: string;
  activeBackgroundColor?: string;
  inactiveBackgroundColor?: string;
};

const Tabs: React.FC<TabsProps> = ({
  data,
  selectedIndex,
  onChange,
  activeColor,
  inactiveColor,
  activeBackgroundColor,
  inactiveBackgroundColor
}) => {
  return (
    <View>
      <Text>Tabs</Text>
    </View>
  );
};
