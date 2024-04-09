'use client';

import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from 'react';
import { ThemeType } from '../types/theme';

export type ThemeContextType = [ThemeType, Dispatch<SetStateAction<ThemeType>>];
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeType>(() => {
    if (typeof window === 'undefined') {
      return 'light';
    }
    // get the theme from local storage if it's available
    const localTheme = window.localStorage.getItem('theme');
    // get the default theme from the user's system
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (localTheme) {
      return localTheme as ThemeType;
    } else if (userPrefersDark) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    // get the theme from local storage if it's available
    const localTheme = window.localStorage.getItem('theme');
    // get the default theme from the user's system
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (localTheme) {
      setTheme(localTheme as ThemeType);
    } else if (userPrefersDark) {
      document.documentElement.classList.add('dark');
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    // listen for changes in the theme state
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      window.localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      window.localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  useEffect(() => {
    // listen for changes in the system theme state
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return <ThemeContext.Provider value={[theme, setTheme]}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

export default ThemeProvider;
