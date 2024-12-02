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
    date: "2024-11-25",
    image: require("@assets/images/hero/onboarding-pagination-indicator.jpg"),
    github: "https://github.com/fruitsdrink/rn-onboarding-component-",
    youtube: "https://youtu.be/m8ATJwrAif0",
    tags: ["动画", "reanimated", "onboarding", "轮播图"]
  },
  {
    id: "2",
    title: "Reanimated练习",
    desc: "Reanimated 系列基础练习",
    href: "/animation/reanimated-tutorial",
    date: "2024-11-26",
    image: require("@assets/images/hero/reanimated.png"),
    youtube: "https://youtu.be/bP72HF-G4aQ",
    tags: ["动画", "reanimated"]
  },
  {
    id: "3",
    title: "Reanimated轮播图",
    href: "/animation/reanimated-carousel",
    date: "2024-11-27",
    image: require("@assets/images/hero/reanimated-carousel.jpg"),
    imageSizeType: "vertical",
    youtube: "https://youtu.be/LflZJ4sY5Pw",
    tags: ["动画", "reanimated", "轮播图"]
  },
  {
    id: "4",
    title: "循环轮播图",
    href: "/animation/reanimated-slider",
    date: "2024-11-29",
    image: require("@assets/images/hero/reanimated-slider.jpg"),
    imageSizeType: "vertical",
    youtube: "https://youtu.be/wIh60UQzUKY",
    tags: ["FlatList", "动画", "reanimated", "轮播图"]
  },
  {
    id: "5",
    title: "引导屏01",
    href: "/onboarding-screen/onboarding-screen-01/onboarding",
    date: "2024-11-30",
    image: require("@assets/images/hero/onboarding-screen/onboarding-screen-01.jpg"),
    imageSizeType: "vertical",
    youtube: "https://youtu.be/7ZkwC8NKPzM",
    tags: ["引导屏", "onboarding", "FlatList"]
  },
  {
    id: "6",
    title: "引导屏02",
    href: "/onboarding-screen/onboarding-screen-02",
    date: "2024-11-30",
    image: require("@assets/images/hero/onboarding-screen/onboarding-screen-02.jpg"),
    imageSizeType: "vertical",
    youtube: "https://youtu.be/0eWe01XPM40",
    tags: ["引导屏", "onboarding", "FlatList"]
  },
  {
    id: "7",
    title: "引导屏03",
    href: "/onboarding-screen/onboarding-screen-03",
    date: "2024-11-30",
    image: require("@assets/images/hero/onboarding-screen/onboarding-screen-03.jpg"),
    imageSizeType: "vertical",
    youtube: "https://youtu.be/1XP28xVToho",
    tags: ["引导屏", "onboarding", "原生动画", "ScrollView", "动画"]
  },
  {
    id: "8",
    title: "引导屏04",
    href: "/onboarding-screen/onboarding-screen-04",
    date: "2024-12-01",
    image: require("@assets/images/hero/onboarding-screen/onboarding-screen-04.jpg"),
    imageSizeType: "vertical",
    youtube: "https://youtu.be/OT-73hpwxXQ",
    tags: ["引导屏", "onboarding", "reanimated", "动画", "ScrollView"]
  },
  {
    id: "9",
    title: "引导屏05",
    href: "/onboarding-screen/onboarding-screen-05",
    date: "2024-12-01",
    image: require("@assets/images/hero/onboarding-screen/onboarding-screen-05.jpg"),
    imageSizeType: "vertical",
    youtube: "https://youtu.be/YE7c6ch2msY",
    tags: ["引导屏", "onboarding", "原生动画", "动画", "FlatList"]
  },
  {
    id: "10",
    title: "引导屏06",
    href: "/onboarding-screen/onboarding-screen-06",
    date: "2024-12-01",
    image: require("@assets/images/hero/onboarding-screen/onboarding-screen-06.jpg"),
    imageSizeType: "vertical",
    youtube: "https://youtu.be/XHFND34Tx9g",
    tags: ["引导屏", "onboarding", "FlatList"]
  },
  {
    id: "11",
    title: "视差轮播图",
    href: "/animation/reanimated-wallpaper-carousel",
    date: "2024-12-01",
    image: require("@assets/images/hero/animation/reanimated-wallpaper-carousel.jpg"),
    imageSizeType: "vertical",
    youtube: "https://youtu.be/qaGRabISXwI",
    tags: ["视差", "轮播图", "TanStack Query", "FlatList", "reanimated"]
  },
  {
    id: "12",
    title: "FlatList动画",
    href: "/animation/animated-flatlist",
    date: "2024-12-02",
    image: require("@assets/images/hero/animation/animated-flatlist.jpg"),
    imageSizeType: "vertical",
    youtube: "https://youtu.be/F8x-dyIsrJ8",
    tags: ["FlatList", "原生动画", "动画"]
  },
  {
    id: "13",
    title: "视差轮播图2",
    href: "/animation/reanimated-wallpaper-carousel2",
    date: "2024-12-02",
    image: require("@assets/images/hero/animation/reanimated-wallpaper-carousel2.jpg"),
    imageSizeType: "vertical",
    youtube: "https://www.youtube.com/live/8Saxitk5IWg",
    tags: ["视差", "轮播图", "TanStack Query", "FlatList", "reanimated"]
  }
];
