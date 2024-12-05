import { type Href, Stack } from "expo-router";
import {
  Dimensions,
  FlatList,
  View,
  SafeAreaView,
  ScrollView
} from "react-native";
import type React from "react";
import { posts } from "@/data/posts";
import { LabListItem } from "@/components/LabListItem";
import { FlashList } from "@shopify/flash-list";

const { width } = Dimensions.get("screen");
const sortedPost = posts.sort((a, b) => {
  // 按id倒序排序
  return Number.parseInt(b.id) - Number.parseInt(a.id);
});
export default function Index() {
  return (
    <SafeAreaView className="flex-1">
      <Stack.Screen options={{ title: "Expo Hero" }} />

      <FlashList
        data={sortedPost}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                padding: 20
              }}
            >
              <LabListItem post={item} />
            </View>
          );
        }}
        estimatedItemSize={width}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}
