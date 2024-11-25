import { type Href, Link, Stack } from "expo-router";
import { Pressable, SafeAreaView, ScrollView, Text, View } from "react-native";
import { Image } from "expo-image";
import type React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

type LabListItemProps = {
  title: string;
  image?: NodeRequire;
  href: Href;
  date: string;
  github?: Href;
  youtube?: Href;
};
const LabListItem: React.FC<LabListItemProps> = ({
  title,
  image,
  href,
  date,
  github,
  youtube
}) => {
  return (
    <View
      className="gap-2 p-4 bg-white rounded-lg"
      style={{
        boxShadow: "1 1 1 0 rgba(-, 0, 0, 0.3)"
      }}
    >
      <Link href={href} asChild>
        <Pressable>
          {image && (
            <View
              style={{
                borderWidth: 1,
                borderColor: "rgba(0,0,0,0.1)",
                borderRadius: 8,
                marginBottom: 16,
                padding: 8
              }}
            >
              <Image
                source={image}
                contentFit="cover"
                placeholder={{ blurhash }}
                transition={1000}
                style={{
                  width: "100%",
                  aspectRatio: 4 / 2
                  // height: 300
                }}
              />
            </View>
          )}
          <View className="flex-row justify-between items-center mb-4">
            <View className="flex-row gap-1 items-center">
              <Text className="text-center">{title}</Text>
            </View>
            <View className="flex-row gap-1 items-center">
              <AntDesign name="calendar" size={16} color="black" />
              <Text className="text-base text-slate-600">{date}</Text>
            </View>
          </View>
        </Pressable>
      </Link>
      <View className="flex-row gap-4">
        {github && (
          <Link href={github} asChild>
            <AntDesign name="github" size={24} color="black" />
          </Link>
        )}
        {youtube && (
          <Link href={youtube} asChild>
            <Entypo name="youtube-with-circle" size={24} color="black" />
          </Link>
        )}
      </View>
    </View>
  );
};
export default function Index() {
  return (
    <SafeAreaView className="flex-1">
      <Stack.Screen options={{ title: "首页" }} />
      <ScrollView contentContainerStyle={{ padding: 20, gap: 20 }}>
        <LabListItem
          image={require("@assets/images/hero/onboarding-pagination-indicator.jpg")}
          title="分页指示器引导页"
          href="/animation/onboarding-pagination-indicator"
          date="2024-11-15"
          github="https://github.com/fruitsdrink/rn-onboarding-component-"
          youtube={"https://youtu.be/m8ATJwrAif0?si=wVO_qEYYEVCZ_xEQ"}
        />
        <LabListItem
          image={require("@assets/images/hero/onboarding-pagination-indicator.jpg")}
          title="分页指示器引导页"
          href="/animation/onboarding-pagination-indicator"
          date="2024-11-15"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
