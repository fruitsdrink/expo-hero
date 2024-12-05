import { type Href, Stack } from "expo-router";
import {
  Dimensions,
  FlatList,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text
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

const sortedPost = posts.sort((a, b) => {
  // 按id倒序排序
  return Number.parseInt(b.id) - Number.parseInt(a.id);
});
export default function Index() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1">
      <Stack.Screen options={{ title: "Expo Hero", headerShown: false }} />

      <FlatList
        data={sortedPost}
        scrollEventThrottle={16}
        decelerationRate={"fast"}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          margin: 20
        }}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: "100%",
                height: _itemHeight
              }}
            >
              <LabListItem post={item} />
            </View>
          );
        }}
        keyExtractor={(item) => item.id}
      />
      <View>
        <Text>top</Text>
      </View>
    </View>
  );
}
