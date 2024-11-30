import type { Href } from "expo-router";
import type { ImageSourcePropType } from "react-native";

export type Post = {
  id: string;
  title: string;
  desc?: string;
  href: Href;
  date: string;
  image: ImageSourcePropType;
  imageSizeType?: "horizontal" | "vertical";
  github?: Href;
  youtube?: Href;
  tags?: string[];
};

export const posts: Post[] = [
  {
    id: "1",
    title: "分页指示器引导页",
    href: "/animation/onboarding-pagination-indicator",
    date: "2024-11-15",
    image: require("@assets/images/hero/onboarding-pagination-indicator.jpg"),
    github: "https://github.com/fruitsdrink/rn-onboarding-component-",
    youtube: "https://youtu.be/m8ATJwrAif0?si=wVO_qEYYEVCZ_xEQ",
    tags: ["动画", "reanimated", "onboarding", "轮播图"]
  },
  {
    id: "2",
    title: "Reanimated练习",
    desc: "Reanimated 系列基础练习",
    href: "/animation/reanimated-tutorial",
    date: "2024-11-16",
    image: require("@assets/images/hero/reanimated.png"),
    youtube: "https://youtu.be/bP72HF-G4aQ?si=OoWSTSOeBRjiCdmm",
    tags: ["动画", "reanimated"]
  },
  {
    id: "3",
    title: "Reanimated轮播图",
    href: "/animation/reanimated-carousel",
    date: "2024-11-16",
    image: require("@assets/images/hero/reanimated-carousel.jpg"),
    imageSizeType: "vertical",
    youtube: "https://youtu.be/LflZJ4sY5Pw?si=7DQDSuB7DpQmlOPu",
    tags: ["动画", "reanimated", "轮播图"]
  },
  {
    id: "4",
    title: "循环轮播图",
    href: "/animation/reanimated-slider",
    date: "2024-11-16",
    image: require("@assets/images/hero/reanimated-slider.jpg"),
    imageSizeType: "vertical",
    youtube: "https://youtu.be/wIh60UQzUKY?si=nVV3hOb5UgNAooyH",
    tags: ["FlatList", "动画", "reanimated", "轮播图"]
  },
  {
    id: "5",
    title: "引导屏01",
    href: "/onboarding-screen/onboarding-screen-01/onboarding",
    date: "2024-11-16",
    image: require("@assets/images/hero/onboarding-screen/onboarding-screen-01.jpg"),
    imageSizeType: "vertical",
    youtube: "https://youtu.be/7ZkwC8NKPzM?si=bmytT6Eu4L-u11Gn",
    tags: ["引导屏", "onboarding", "FlatList"]
  }
];
