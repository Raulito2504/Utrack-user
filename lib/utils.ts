import { clsx, type ClassValue } from "clsx";
import * as NavigationBar from "expo-navigation-bar";
import { Platform } from "react-native";
import { twMerge } from "tailwind-merge";
import { NAV_THEME } from "~/lib/constants/colors";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function setAndroidNavigationBar(theme: "light" | "dark") {
  if (Platform.OS !== "android") return;
  await NavigationBar.setButtonStyleAsync(theme === "dark" ? "light" : "dark");
  await NavigationBar.setBackgroundColorAsync(
    theme === "dark" ? NAV_THEME.dark.background : NAV_THEME.light.background,
  );
}
