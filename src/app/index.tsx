import { type Href, Link, Stack } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Image } from "expo-image";
import type React from "react";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

type LabListItemProps = {
  title: string;
  image?: NodeRequire;
  href: Href;
};
const LabListItem: React.FC<LabListItemProps> = ({ title, image, href }) => {
  return (
    <Link href={href} asChild>
      <Pressable
        className="gap-2 p-4 bg-white rounded-lg"
        style={{
          boxShadow: "1 1 1 0 rgba(-, 0, 0, 0.3)"
        }}
      >
        {image && (
          <Image
            source={image}
            contentFit="contain"
            placeholder={{ blurhash }}
            transition={1000}
            style={{
              width: "100%",
              aspectRatio: 1
              // height: 300
            }}
          />
        )}

        <Text className="mb-4 text-center">{title}</Text>
      </Pressable>
    </Link>
  );
};
export default function Index() {
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20
        }}
      >
        <Stack.Screen options={{ title: "首页" }} />
        <LabListItem
          image={require("@assets/images/hero/onboarding-pagination-indicator.jpg")}
          title="分页指示器引导页"
          href="/animation/onboarding-pagination-indicator"
        />
      </View>
    </ScrollView>
  );
}
