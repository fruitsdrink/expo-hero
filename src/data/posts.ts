import type { Href } from "expo-router";

export type Post = {
  id: string;
  title: string;
  desc?: string;
  href: Href;
  date: string;
  image: NodeRequire;
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
    tags: ["animation", "reanimated", "onboarding"]
  },
  {
    id: "2",
    title: "Reanimated练习",
    desc: "Reanimated 系列基础练习",
    href: "/animation/reanimated-tutorial",
    date: "2024-11-16",
    image: require("@assets/images/hero/reanimated.png"),
    youtube: "https://youtu.be/bP72HF-G4aQ?si=OoWSTSOeBRjiCdmm",
    tags: ["animation", "reanimated"]
  },
  {
    id: "3",
    title: "Reanimated轮播图",
    href: "/animation/reanimated-carousel",
    date: "2024-11-16",
    image: require("@assets/images/hero/reanimated.png"),
    youtube: "https://youtu.be/LflZJ4sY5Pw?si=7DQDSuB7DpQmlOPu",
    tags: ["animation", "reanimated", "轮播图"]
  }
];
