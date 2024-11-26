import { type Href, Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { Image } from "expo-image";
import type React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import type { Post } from "@/data/posts";

const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

type LabListItemProps = {
  post: Post;
};

export const LabListItem: React.FC<LabListItemProps> = ({
  post: { title, desc, image, href, date, github, youtube, tags }
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
          <View className="flex-row justify-between items-center my-2">
            <View className="flex-row gap-1 items-center">
              <Text className="text-center">{title}</Text>
            </View>
            <View className="flex-row gap-1 items-center">
              <AntDesign name="calendar" size={16} color="black" />
              <Text className="text-base text-slate-600">{date}</Text>
            </View>
          </View>
          {desc && <Text className="text-base text-gray-500">{desc}</Text>}
          {tags && (
            <View className="flex-row gap-1 my-2">
              {tags.map((tag) => (
                <View
                  key={tag}
                  className="flex-wrap px-2 py-1 text-sm rounded-full bg-slate-800"
                >
                  <Text className="text-white">{tag}</Text>
                </View>
              ))}
            </View>
          )}
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
