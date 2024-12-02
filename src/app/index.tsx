import { type Href, Stack } from "expo-router";
import { SafeAreaView, ScrollView } from "react-native";
import type React from "react";
import { posts } from "@/data/posts";
import { LabListItem } from "@/components/LabListItem";

const sortedPost = posts.sort((a, b) => {
  // 按id倒序排序
  return Number.parseInt(b.id) - Number.parseInt(a.id);
});
export default function Index() {
  return (
    <SafeAreaView className="flex-1">
      <Stack.Screen options={{ title: "Expo Hero" }} />
      <ScrollView contentContainerStyle={{ padding: 20, gap: 20 }}>
        {posts.map((post) => (
          <LabListItem key={post.id} post={post} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
