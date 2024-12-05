import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { icons } from "lucide-react-native";
import Animated, {
  FadeInRight,
  FadeOutRight,
  LinearTransition
} from "react-native-reanimated";

const _spacing = 4;

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
  activeColor = "#fff",
  inactiveColor = "#999",
  activeBackgroundColor = "#111",
  inactiveBackgroundColor = "#ddd"
}) => {
  return (
    <Animated.View
      layout={LinearTransition.springify().damping(80).stiffness(200)}
      style={{
        flexDirection: "row",
        gap: _spacing
      }}
    >
      {data.map((item, index) => {
        const isSelected = selectedIndex === index;
        return (
          <Pressable
            key={`tab-${index.toString()}`}
            onPress={() => onChange(index)}
            style={{
              padding: _spacing * 3,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: _spacing,
              backgroundColor: isSelected
                ? activeBackgroundColor
                : inactiveBackgroundColor,
              borderRadius: 8
            }}
          >
            <Icon name={item.icon} />
            {isSelected && (
              <Animated.Text
                entering={FadeInRight.springify().damping(80).stiffness(200)}
                exiting={FadeOutRight.springify().damping(80).stiffness(200)}
                style={{
                  color: isSelected ? activeColor : inactiveColor,
                  fontWeight: isSelected ? "bold" : "normal"
                }}
              >
                {item.label}
              </Animated.Text>
            )}
          </Pressable>
        );
      })}
    </Animated.View>
  );
};

type IconProp = {
  name: IconNames;
};

const Icon: React.FC<IconProp> = ({ name }) => {
  const IconComponent = icons[name];

  return <IconComponent size={16} />;
};
