import { Link, Stack } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Stack.Screen options={{ title: "首页" }} />
      <Link href={"/animation/onboarding-pagination-indicator"} asChild>
        <Pressable>
          <Text>分页指示器引导页</Text>
        </Pressable>
      </Link>
    </View>
  );
}
