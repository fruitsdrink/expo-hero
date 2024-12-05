import { type Href, Stack } from "expo-router";
import {
  Dimensions,
  FlatList,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar
} from "react-native";
import type React from "react";
import { posts } from "@/data/posts";
import { LabListItem } from "@/components/LabListItem";
import { FlashList } from "@shopify/flash-list";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Constants from "expo-constants";

const { width, height } = Dimensions.get("screen");
const _itemWidth = width;
const _itemHeight = height;
console.log("height: ", Constants.isHeadless);

const sortedPost = posts.sort((a, b) => {
  // 按id倒序排序
  return Number.parseInt(b.id) - Number.parseInt(a.id);
});
export default function Index() {
  const insets = useSafeAreaInsets();

  console.log("height of status bar", insets);

  return (
    <View className="flex-1">
      <Stack.Screen options={{ title: "Expo Hero" }} />

      <FlatList
        data={sortedPost}
        scrollEventThrottle={16}
        decelerationRate={"fast"}
        renderItem={({ item, index }) => {
          return (
            <View style={{}}>
              <LabListItem post={item} />
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
