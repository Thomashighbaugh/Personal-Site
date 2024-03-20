import { useTheme } from "next-themes";

import { usePersistentState } from "~/lib";

import { NavigationItemType, Theme } from "~/types";

import type { NavigationItem, NavigationItems } from "~/types";

import profile from "~/data/profile.json";
import type { Profile } from "~/types/profile";

const { social, pagesIgnore } = profile as unknown as Profile;

const staticMenuItems: Array<Array<NavigationItem>> = [
  [
    {
      type: NavigationItemType.LINK,
      icon: "feather:home",
      text: "Home",
      href: "/",
    },
    {
      type: NavigationItemType.LINK,
      icon: "feather:edit-3",
      text: "Blog",
      href: "/blog",
    },
    {
      type: NavigationItemType.LINK,
      icon: "feather:copy",
      text: "Projects",
      href: "/projects",
    },
  ].filter((e) => !pagesIgnore.includes(e.href)),
  [
    {
      type: NavigationItemType.LINK,
      icon: "feather:message-square",
      text: "Social Links",
      href: "https://links.thomasleonhighbaugh.me",
      external: true,
    },
       {
     type: NavigationItemType.LINK,
     icon: "feather:message-square",
     text: "Resume",
     href: "https://resume.thomasleonhighbaugh.me",
     external: true,
   },
    social.twitter && {
      type: NavigationItemType.LINK,
      icon: "feather:linkedin",
      text: "LinkedIn",
      href: `https://linkedin.com/in/${social.linkedin}`,
      external: true,
    },
    social.github && {
      type: NavigationItemType.LINK,
      icon: "feather:github",
      text: "GitHub",
      href: `https://github.com/${social.github}`,
      external: true,
    },
  ].filter((e) => e),
];

export function useNavigation(): {
  menu: NavigationItems;
  settings: NavigationItems;
} {
  const state = usePersistentState();
  const { sound } = state.get();

  const { theme, setTheme } = useTheme();

  const menuItems: NavigationItems = [...staticMenuItems];

  const settingsItems: NavigationItems = [
    [
      {
        type: NavigationItemType.ACTION,
        icon: sound ? "feather:volume-2" : "feather:volume-x",
        endIcon: sound ? "feather:check-circle" : "feather:circle",
        text: `Sounds ${sound ? "On" : "Off"}`,
        onClick: () =>
          state.set((settings) => ({
            ...settings,
            sound: !settings.sound,
          })),
      },
      {
        type: NavigationItemType.DIVIDER,
      },
      {
        type: NavigationItemType.ACTION,
        icon: "feather:monitor",
        endIcon: theme === Theme.SYSTEM ? "feather:check-circle" : undefined,
        text: "System Theme",
        onClick: () => setTheme(Theme.SYSTEM),
      },
      {
        type: NavigationItemType.ACTION,
        icon: "feather:sun",
        endIcon: theme === Theme.LIGHT ? "feather:check-circle" : undefined,
        text: "Light Theme",
        onClick: () => setTheme(Theme.LIGHT),
      },
      {
        type: NavigationItemType.ACTION,
        icon: "feather:moon",
        endIcon: theme === Theme.DARK ? "feather:check-circle" : undefined,
        text: "Dark Theme",
        onClick: () => setTheme(Theme.DARK),
      },
    ],
  ];

  return {
    menu: menuItems,
    settings: settingsItems,
  };
}
