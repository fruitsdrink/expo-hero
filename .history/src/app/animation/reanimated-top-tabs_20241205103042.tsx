import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { icons } from "lucide-react-native";

export default function ReanimatedTopTabs() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  return (
    <>
      <Stack.Screen
        options={{
          title: "顶部Tab动画",
          headerBackTitle: "返回"
        }}
      />
      <SafeAreaView style={styles.container}>
        <Tabs
          data={[
            { icon: "LifeBuoy", label: "Buoy" },
            { icon: "Fish", label: "Fresh fish" },
            { icon: "Sailboat", label: "Sail" },
            { icon: "Ship", label: "Ship it" },
            { icon: "ShipWheel", label: "Manage it" }
          ]}
          onChange={(index) => setSelectedIndex(index)}
          selectedIndex={selectedIndex}
        />
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
  icon: IconNames;
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
      {data.map((item, index) => {
        return (
          <View key={`tab-${index.toString()}`}>
            <Text>{item.label}</Text>
            <Icon />
          </View>
        );
      })}
    </View>
  );
};

type IconProp = {
  name: IconNames;
};

const Icon: React.FC<IconProp> = ({ name }) => {
  const IconComponent = icons[name];

  return <IconComponent />;
};
