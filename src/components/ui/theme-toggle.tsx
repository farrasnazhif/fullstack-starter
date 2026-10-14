"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/providers/theme-provider";
import { IconButton } from "./icon-button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  return <IconButton label={theme === "dark" ? "Use light mode" : "Use dark mode"} variant="quiet" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>{theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}</IconButton>;
}
