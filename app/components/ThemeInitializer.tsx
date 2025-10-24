"use client";

import { useEffect } from "react";
import { useThemeStore } from "../store/theme.store";

export default function ThemeInitializer() {
  const { setTheme } = useThemeStore();

  useEffect(() => {
    const saved = localStorage.getItem("theme-storage");
    if (saved) {
      const parsed = JSON.parse(saved)?.state?.isDarkMode;
      setTheme(!!parsed);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark);
    }
  }, [setTheme]);

  return null; // doesn’t render anything
}



