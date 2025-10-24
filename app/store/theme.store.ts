'use client'

import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type State = {
  isDarkMode: boolean;
};
type Action = {
  toggleTheme: () => void;
  setTheme: (dark: boolean) => void;
}  

export const useThemeStore = create<
  State & Action,
  [['zustand/persist', unknown]]
>(
  persist(
    (set) => ({
      isDarkMode: false,
      toggleTheme: () =>
        set((state) => {
          const next = !state.isDarkMode;
          // toggle html class
          if (next) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
          return { isDarkMode: next };
        }),
        setTheme: (dark) =>
          set(() => {
            if (dark) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
            return { isDarkMode: dark };
          }),
      }),
    { name: "theme-storage",
      storage: createJSONStorage(() => localStorage)
     }
  )
);