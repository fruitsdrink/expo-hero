import { type Href, Stack } from "expo-router";
import { SafeAreaView, ScrollView } from "react-native";
import type React from "react";
import { posts } from "@/data/posts";
import { LabListItem } from "@/components/LabListItem";

export default function Index() {
  return (
    <SafeAreaView className="flex-1">
      <Stack.Screen options={{ title: "首页" }} />
      <ScrollView contentContainerStyle={{ padding: 20, gap: 20 }}>
        {posts.map((post) => (
          <LabListItem key={post.id} post={post} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
